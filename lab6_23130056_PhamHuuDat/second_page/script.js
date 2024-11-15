const nextButton = document.querySelector('.next-btn');
const backButton = document.querySelector('.back-btn');
const iconkhoahoc1 = document.querySelector('.iconkhoahoc');
let scrollAmount1 = 0;

nextButton.addEventListener('click', () => {
    const iconWidth = document.querySelector('.icon').offsetWidth; // Chiều rộng của icon
    const containerWidth = document.querySelector('.carousel-container').offsetWidth; // Chiều rộng của container

    // Kiểm tra nếu còn nội dung để cuộn thì mới cuộn tiếp
    if (scrollAmount1 + containerWidth < iconkhoahoc1.scrollWidth) {
        scrollAmount1 += iconWidth + 16; // 16 là khoảng cách giữa các thẻ div (gap: 1rem)
        iconkhoahoc1.style.transform = `translateX(-${scrollAmount1}px)`; // Áp dụng chuyển động
        backButton.style.display = 'flex'; // Hiện nút back
    }

    // Ẩn nút next nếu đã đến cuối danh sách
    if (scrollAmount1 + containerWidth >= iconkhoahoc1.scrollWidth) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'flex'; // Hiện nút next
    }
});

backButton.addEventListener('click', () => {
    const iconWidth = document.querySelector('.icon').offsetWidth; // Chiều rộng của icon

    // Cuộn ngược lại nếu đã cuộn qua ít nhất một thẻ
    if (scrollAmount1 > 0) {
        scrollAmount1 -= iconWidth + 16; // Giảm scrollAmount
        iconkhoahoc1.style.transform = `translateX(-${scrollAmount1}px)`; // Áp dụng chuyển động
    }

    // Ẩn nút back nếu đã quay về đầu danh sách
    if (scrollAmount1 <= 0) {
        backButton.style.display = 'none'; // Ẩn nút back khi ở đầu
    }

    // Hiện lại nút next nếu không ở cuối
    nextButton.style.display = 'flex';
});

const nextButton1 = document.querySelector('.next1-btn');
const backButton1 = document.querySelector('.back1-btn');
const iconkhoahoc = document.querySelector('.cackhoahoc');
let scrollAmount = 0;

nextButton1.addEventListener('click', () => {
    const iconWidth1 = document.querySelector('.khoahoc').offsetWidth; // Chiều rộng của icon
    const containerWidth1 = document.querySelector('.cacloaikhoahoc').offsetWidth; // Chiều rộng của container

    // Kiểm tra nếu còn nội dung để cuộn thì mới cuộn tiếp
    if (scrollAmount + containerWidth1 < iconkhoahoc.scrollWidth) {
        scrollAmount += iconWidth1 + 16; // 16 là khoảng cách giữa các thẻ div (gap: 1rem)
        iconkhoahoc.style.transform = `translateX(-${scrollAmount}px)`; // Áp dụng chuyển động
        backButton1.style.display = 'flex'; // Hiện nút back
    }

    // Ẩn nút next nếu đã đến cuối danh sách
    if (scrollAmount + containerWidth1 >= iconkhoahoc.scrollWidth) {
        nextButton1.style.display = 'none';
    } else {
        nextButton1.style.display = 'flex'; // Hiện nút next
    }
});

backButton1.addEventListener('click', () => {
    const iconWidth1 = document.querySelector('.khoahoc').offsetWidth; // Chiều rộng của icon

    // Cuộn ngược lại nếu đã cuộn qua ít nhất một thẻ
    if (scrollAmount > 0) {
        scrollAmount -= iconWidth1 + 16; // Giảm scrollAmount
        iconkhoahoc.style.transform = `translateX(-${scrollAmount}px)`; // Áp dụng chuyển động
    }

    // Ẩn nút back nếu đã quay về đầu danh sách
    if (scrollAmount <= 0) {
        backButton1.style.display = 'none'; // Ẩn nút back khi ở đầu
    }

    // Hiện lại nút next nếu không ở cuối
    nextButton1.style.display = 'flex';
});
function showDescription(element) {
    const descriptionId = element.getAttribute('data-description');
    const descriptionDiv = document.getElementById(descriptionId);
    
    // Hiển thị mô tả
    descriptionDiv.style.display = 'block';

    // Thêm sự kiện nhấp vào tài liệu để ẩn mô tả khi nhấn ra ngoài
    document.addEventListener("click", hideDescriptionOnClickOutside);
    
    // Đảm bảo chỉ có mô tả của khóa học đang hiển thị
    document.querySelectorAll('.description').forEach(function(desc) {
        if (desc !== descriptionDiv) {
            desc.style.display = 'none';
        }
    });
}

function showDescription(element) {
    const descriptionId = element.getAttribute('data-description');
    const descriptionDiv = document.getElementById(descriptionId);
    
    // Ẩn tất cả các mô tả trước
    document.querySelectorAll('.description').forEach(function(desc) {
        desc.style.display = 'none';
    });
    
    // Hiển thị mô tả của khóa học được di chuột vào
    descriptionDiv.style.display = 'block';

    // Thêm sự kiện nhấp vào tài liệu để ẩn mô tả khi nhấn ra ngoài
    document.addEventListener("click", hideDescriptionOnClickOutside);
}

function hideDescriptionOnClickOutside(event) {
    const allDescriptions = document.querySelectorAll('.description');
    const khoahocDivs = document.querySelectorAll('.khoahoc');
    
    let isClickInside = false;

    khoahocDivs.forEach(function(khoahocDiv) {
        if (khoahocDiv.contains(event.target)) {
            isClickInside = true;
        }
    });

    if (!isClickInside) {
        allDescriptions.forEach(function(descriptionDiv) {
            descriptionDiv.style.display = 'none';
        });
        // Gỡ bỏ sự kiện nhấp vào tài liệu
        document.removeEventListener("click", hideDescriptionOnClickOutside);
    }
}
