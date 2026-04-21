function changeVideo(videoId, element) {
    // เปลี่ยนวิดีโอ
    const player = document.getElementById("videoPlayer");
    player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    // ลบ active เก่า
    document.querySelectorAll(".item").forEach(item => {
        item.classList.remove("active");
    });
    // ใส่ active ใหม่
    element.classList.add("active");
}

function showTab(tabId) {
    // ซ่อนทั้งหมด
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    // ลบ active ปุ่ม
    document.querySelectorAll(".tab").forEach(btn => {
        btn.classList.remove("active");
    });
    // แสดงอันที่เลือก
    document.getElementById(tabId).classList.add("active");
    // active ปุ่มที่กด
    event.target.classList.add("active");
}

