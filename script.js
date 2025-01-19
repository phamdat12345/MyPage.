function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Hàm để chuyển đổi giữa các section
function showSection(sectionId) {
    // Ẩn tất cả các section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Hiện section được chọn
    document.getElementById(sectionId).style.display = 'block';
}

// Gán sự kiện cho các liên kết
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('home');
});

document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('about');
});

document.querySelector('a[href="#labs"]').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('labs');
});

document.querySelector('a[href="#result"]').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('result');
    
});
document.querySelector('a[href="#requiment"]').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('requiment');
});
document.querySelector('a[href="#design"]').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('design');
});
// Hiển thị trang Home khi vừa vào trang
showSection('home');

// Xử lý click vào các tab trong "Requiment" section
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target'); // Lấy id từ data-target
        document.querySelectorAll('#requiment .section').forEach(section => {
            section.style.display = 'none'; // Ẩn tất cả các tab content
        });
        tabs.forEach(t => t.classList.remove('active')); // Xóa class "active" khỏi các tab
        this.classList.add('active'); // Thêm class "active" vào tab hiện tại
        const targetTabContent = document.getElementById(targetId);
        if (targetTabContent) targetTabContent.style.display = 'block'; // Hiển thị nội dung tab được chọn
    });
});
