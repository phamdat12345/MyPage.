// Ví dụ thông tin bài tập
const exercise = {
    title: 'Bài Tập 1',
    description: 'Viết một chương trình C để in ra "Hello, World!"',
};

// Hiển thị tiêu đề và mô tả bài tập
document.getElementById('exerciseTitle').innerText = exercise.title;
document.getElementById('exerciseDescription').innerText = exercise.description;

// Chạy code
document.getElementById('runCode').addEventListener('click', () => {
    const code = document.getElementById('codeEditor').value;
    alert(`Chạy code:\n${code}`);
    // Xử lý chạy code ở đây (cần backend hoặc dịch vụ bên thứ ba)
});

// Xóa code
document.getElementById('clearCode').addEventListener('click', () => {
    document.getElementById('codeEditor').value = '';
});

// Nộp code
document.getElementById('submitCode').addEventListener('click', () => {
    const code = document.getElementById('codeEditor').value;
    alert(`Nộp code:\n${code}`);
    // Xử lý nộp code ở đây (cần backend hoặc dịch vụ bên thứ ba)
});
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn chặn mặc định của form
    // Kiểm tra thông tin đăng nhập (có thể kết nối backend ở đây)
    window.location.href = 'dashboard.html'; // Chuyển hướng đến dashboard
});
