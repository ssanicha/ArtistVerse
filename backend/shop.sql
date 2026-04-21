USE shop;
-- CREATE TABLE orders (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(255),
--     price FLOAT,
--     quantity INT,
--     total FLOAT
-- );
SELECT * FROM orders;
ALTER TABLE orders
ADD created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
-- USE shop;
-- CREATE TABLE products (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255),
--     price FLOAT,
--     stock INT DEFAULT 0
-- );
-- SHOW TABLES;
-- INSERT INTO products (name, price, stock) VALUES
-- ('gorn The 1st Album From the room where I stay', 890, 50),
-- ('gorn CAP [gorn''s ROOM CONCERT]', 499, 50),
-- ('gorn babytee [gorn''s ROOM CONCERT]', 590, 50),
-- ('gorn''s ROOM [gorn''s ROOM CONCERT]', 490, 50),
-- ('PROXIE Band T-Shirt (I''m Good Ver.)', 490, 50),
-- ('BUBBLEGORN Ver.', 490, 50),
-- ('VISKEY Ver.', 490, 50),
-- ('OSKY Ver.', 490, 50),
-- ('(CALLSIGN) Gorn Ver.', 499, 50),
-- ('(CALLSIGN) Onglee Ver.', 499, 50);
-- USE shop;
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(50),
--     email VARCHAR(100),
--     password VARCHAR(100),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
SHOW TABLES;
SELECT * FROM users;
SELECT * FROM products;
-- SELECT * FROM orders ORDER BY created_at DESC
-- UPDATE products
-- SET stock = 7
-- WHERE id IN (3);





















