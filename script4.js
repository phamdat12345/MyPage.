
    // Lưu danh sách các câu hỏi
    const questions = [
        { id: 1, title: "1. Two Sum (Java)", language: "Java" },
        { id: 2, title: "2. Add Two Numbers (Java)", language: "Java" },
        { id: 3, title: "3. Longest Substring Without Repeating Characters (Python)", language: "Python" },
        { id: 4, title: "4. Median of Two Sorted Arrays (Python)", language: "Python" },
        { id: 5, title: "5. Longest Palindromic Substring (C)", language: "C" },
        { id: 6, title: "6. ZigZag Conversion (C)", language: "C" },
        { id: 7, title: "7. Reverse Integer (Java)", language: "Java" }
    ];

    // Hàm để lọc câu hỏi
    function filterQuestions(language) {
        // Lấy danh sách câu hỏi
        const filteredQuestions = questions.filter(question => question.language === language);
        const allQuestions = document.getElementById('questionItems');
        
        // Xóa danh sách cũ
        allQuestions.innerHTML = '';

        // Thêm câu hỏi lọc vào đầu danh sách
        filteredQuestions.forEach(question => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="question" onclick="redirectToCompiler('${question.id}')">
                    <div class="title_question">
                        <a href="#">${question.title}</a>
                    </div>
                    <div class="a">
                        <div class="solution"><p>result</p></div>
                        <div class="acceptance"><p>53%</p></div>
                        <div class="difficulty"><p>Easy</p></div>
                    </div>
                </div>
            `;
            allQuestions.appendChild(li);
        });

        // Thêm câu hỏi khác vào cuối danh sách
        questions.forEach(question => {
            if (question.language !== language) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="question" onclick="redirectToCompiler('${question.id}')">
                        <div class="title_question">
                            <a href="#">${question.title}</a>
                        </div>
                        <div class="a">
                            <div class="solution"><p>result</p></div>
                            <div class="acceptance"><p>53%</p></div>
                            <div class="difficulty"><p>Easy</p></div>
                        </div>
                    </div>
                `;
                allQuestions.appendChild(li);
            }
        });
    }

    // Hàm chuyển hướng đến trang biên dịch
    function redirectToCompiler(id) {
        // Chuyển hướng đến trang biên dịch với ID bài tập
        window.location.href = `compiler.html?exercise=${id}`;
    }

