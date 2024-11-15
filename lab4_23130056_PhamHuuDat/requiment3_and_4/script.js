const selectors = document.querySelectorAll('.selected'); // Lấy tất cả dropdowns
const iframe = document.querySelector('#video-frame iframe'); // Lấy iframe

// Hàm thay đổi video khi chọn một tùy chọn
function changeVideo(event) {
    const selectedValue = event.target.value;
    if (selectedValue.startsWith('http')) { // Kiểm tra nếu giá trị là URL
        iframe.src = selectedValue; // Cập nhật src của iframe
    }
}

// Gắn sự kiện change cho từng dropdown
selectors.forEach(selector => {
    selector.addEventListener('change', changeVideo);
});
