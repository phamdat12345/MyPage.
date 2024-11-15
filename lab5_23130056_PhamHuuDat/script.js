document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active'); // Xóa lớp active khỏi tất cả
        });
        document.getElementById(`content${tab.id.slice(-1)}`).classList.add('active'); // Thêm lớp active cho nội dung tương ứng
    });
});
