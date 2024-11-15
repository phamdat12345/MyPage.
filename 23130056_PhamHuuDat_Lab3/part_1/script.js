function myfunction() {
    const allSubjects = document.querySelectorAll('[data-subject]'); // Chọn tất cả các môn học
    const checkedSubjects = document.querySelectorAll('.box2 input[type="checkbox"]:checked'); // Các checkbox được chọn

    // Nếu không có checkbox nào được chọn, hiển thị tất cả môn
    if (checkedSubjects.length === 0) {
        allSubjects.forEach(div => div.style.display = 'block');
        return;
    }

    // Lặp qua các môn học và kiểm tra xem môn nào được chọn
    allSubjects.forEach(div => {
        const subjectName = div.getAttribute('data-subject');
        // Kiểm tra xem có checkbox nào được chọn tương ứng với môn học
        const isChecked = Array.from(checkedSubjects).some(cb => {
            if (cb.value === "vn" && subjectName.includes("Viet Nam History (12)")) {
                return true; // Hiển thị nếu checkbox "high-school" được chọn
            } else if (cb.value === "math12" && subjectName.includes("Math (12)")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }else if (cb.value === "math6" && subjectName.includes("Toán (6)")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }else if (cb.value === "van9" && subjectName.includes("Ngữ văn (9)")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }else if (cb.value === "java" && subjectName.includes("Java")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }else if (cb.value === "python" && subjectName.includes("Python basic")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }else if (cb.value === "toan3" && subjectName.includes("Toán (3)")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }else if (cb.value === "tiengviet3" && subjectName.includes("Tiếng Việt (3)")) {
                return true; // Hiển thị nếu checkbox "middle" được chọn
            }
            return false;
        });
        div.style.display = isChecked ? 'block' : 'none'; // Hiển thị hoặc ẩn môn học
    });
}

function myfunction1() {
    const allSubjects = document.querySelectorAll('[data-subject]'); // Chọn tất cả các môn học
    const checkedSubjects = document.querySelectorAll('.input input[type="checkbox"]:checked'); // Các checkbox được chọn

    // Nếu không có checkbox nào được chọn, hiện tất cả môn
    if (checkedSubjects.length === 0) {
        allSubjects.forEach(div => div.style.display = 'block');
        return;
    }

    // Lặp qua tất cả các môn học và kiểm tra xem có được chọn không
    allSubjects.forEach(div => {
        const subjectName = div.getAttribute('data-subject');
        const isChecked = Array.from(checkedSubjects).some(cb => {
            // Kiểm tra xem checkbox nào được chọn
            if (cb.value === "college") {
                // Nếu checkbox college được chọn, hiển thị môn Java và Python Basic
                return subjectName === 'Java' || subjectName === 'Python basic';
            } else if (cb.value === "high-school") {
                // Nếu checkbox high-school được chọn, hiển thị môn Sử(12) và Toán(12)
                return subjectName === 'Viet Nam History (12)' || subjectName === 'Math (12)';
            }else if(cb.value === "mid-school"){
                // Nếu checkbox high-school được chọn, hiển thị môn Toán(6) và văn(9)
                return subjectName === 'Toán (6)' || subjectName === 'Ngữ văn (9)';
            }else if(cb.value === "kid-school"){
                //Nếu checkbox high-school được chọn, hiển thị môn Toán(3) và tiếng Việt (3)
                return subjectName === 'Toán (3)' || subjectName === 'Tiếng Việt (3)';
            }
            return false; // Không hiển thị nếu không thuộc nhóm
        });
        div.style.display = isChecked ? 'block' : 'none'; // Hiển thị hoặc ẩn môn học
    });
}
