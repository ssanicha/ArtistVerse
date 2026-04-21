const artists = {
    Gun: {
        name: "Gun : Ratchanon Ruanpetch",
        th: "กัน : รัชชานนท์ เรือนเพ็ชร์" ,
        dob: "2 November 1996",
        height: "177 cm",
        weight: "64 kg",
        position: "Leader, Vocalist, Rapper",
        img: "../img/gunP.jpg"
    } ,
    Kim: {
        name: "Kim : Pannathorn Jirasart ",
        th: "คิม: ปัณณธร จิรศาสตร์" ,
        dob: "2 November 1998",
        height: "177 cm",
        weight: "67 kg",
        position: "Vocalist",
        img: "../img/kimP.jpg"
    } ,
    Chokun: {
        name: "Chokun : Pavaris Srichaichana ",
        th: "โชกุน : ปวริศร์ ศรีชัยชนะ" ,
        dob: " 28 January 2003",
        height: "184 cm",
        weight: "67 kg",
        position: "Vocalist , Rapper",
        img: "../img/chokunP.jpg"
    } ,
    Gorn: {
        name: "Gorn : Gorn Wannapiarote ",
        th: "กร : กร วรรณไพโรจน์" ,
        dob: " 25 july  2003",
        height: "184 cm",
        weight: "62 kg",
        position: "Vocalist",
        img: "../img/gornP.jpg"
    } ,
    Onglee: {
        name: "Onglee : Oscar Edward Wattraserte ",
        th: "อองรี : ออสการ์ เอ็ดเวิร์ด วัตราเศรษฐ์" ,
        dob: " 16 March  2004",
        height: "179 cm",
        weight: "59 kg",
        position: "Vocalist",
        img: "../img/ongleeP.jpg"
    } ,
    Victor: {
        name: "Victor: Vorameth Kornubrabhan ",
        th: "วิคเตอร์ : วรเมธ กอนุประพันธ์" ,
        dob: " 27 November 2004",
        height: " 177 cm",
        weight: "59 kg",
        position: "Rapper, Vocalist, Youngest",
        img: "../img/victorP.jpg"
    }
}
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = artists[id];

if (data) {
    document.getElementById("name").innerText = data.name;
    document.getElementById("th").innerText = data.th;
    document.getElementById("dob").innerText = "Date of Birth: " + data.dob;
    document.getElementById("body").innerText =
        "Weight: " + data.weight + " / Height: " + data.height;
    document.getElementById("img").src = data.img;
    document.getElementById("position").innerText = "Position: " + data.position;
}