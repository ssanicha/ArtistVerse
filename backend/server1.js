const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
// ให้ frontend คุยกับ backend ได้
app.use(cors());
app.use(express.json());
// เชื่อม MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "internsusunapuggad99Rakmuonna",
    database: "shop"
});
// ทดสอบการเชื่อมต่อ
db.connect(err => {
    if (err) {
        console.log("❌ ต่อ DB ไม่ได้", err);
    } else {
        console.log("✅ ต่อ MySQL สำเร็จ");
    }
});

// route ทดสอบ
app.get("/", (req, res) => {
    res.send("Server ทำงานแล้ว ");
});
// เปิด server
app.listen(3000, () => {
    console.log("Server รันที่ http://localhost:3000");
});
app.post("/checkout", (req, res) => {
    const cart = req.body;
    // เช็ค stock ทุกตัวก่อน
    let checkPromises = cart.map(item => {
        return new Promise((resolve, reject) => {

            let qty = parseInt(item.qty);

            db.query(
                "SELECT stock FROM products WHERE id = ?",
                [item.id],
                (err, result) => {
                console.log("STOCK:", result[0].stock, "QTY:", qty);
                    if (result[0].stock < qty) {
                        return reject("out_of_stock");
                    }
                    resolve();
                }
            );
        });
    });

    // ถ้าผ่านทั้งหมด
    Promise.all(checkPromises)
        .then(() => {

            cart.forEach(item => {

                let qty = parseInt(item.qty);
                let price = parseFloat(item.price);

                let total = price * qty;

                if (qty >= 5) {
                    total *= 0.9;
                }

                total *= 1.07;

                // insert order
                db.query(
                    `INSERT INTO orders (product_name, price, quantity, total)
                     VALUES (?, ?, ?, ?)`,
                    [item.product_name, price, qty, total]
                );

                // ลด stock
                db.query(
                    `UPDATE products SET stock = stock - ? WHERE id = ?`,
                    [qty, item.id]
                );
            });
            console.log("✅ SUCCESS");
            res.json({ status: "ok" });
        })
        // ถ้ามีของไม่พอ
        .catch((err) => {
            console.log("❌ OUT OF STOCK");
            res.json({ status: "out_of_stock" });
        });
});
// ดึงข้อมูลจาก database
app.get("/orders", (req, res) => {
    db.query("SELECT * FROM orders ORDER BY created_at DESC", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});
// ลบ order ทั้งหมด
app.delete("/orders", (req, res) => {
    const sql = "DELETE FROM orders";
    db.query(sql, (err, result) => {
        if (err) {
            console.log("❌ DELETE ERROR:", err);
            res.json({ status: "error" });
        } else {
            console.log("🗑️ ลบ order ทั้งหมดแล้ว");
            res.json({ status: "ok" });
        }
    });

});

// เข้าสู่ระบบ
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ status: "error" });
        }
        // กรณีไม่เจอ user
        if (result.length === 0) {
            return res.json({ status: "no_user" });
        }
        const user = result[0];
        // เช็ค password (เทียบกับ hash)
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            // login สำเร็จ
            res.json({
                status: "ok",
                user: user
            });
        } else {
            res.json({ status: "wrong_password" });
        }

    });

});
// ลงทะเบียน
app.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `
            INSERT INTO users (username, email, password)
            VALUES (?, ?, ?)
        `;
        db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.log("❌ REGISTER ERROR:", err);
                return res.json({ status: "error" });
            }
            console.log("✅ REGISTER OK");
            res.json({ status: "ok" });
        });
    } catch (err) {
        console.log(err);
        res.json({ status: "error" });
    }
});




