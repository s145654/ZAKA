function Game(id, title, genre, price, rating) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.rating = rating;
}

function Developer(id, name, studio, specialty, experience) {
    this.id = id;
    this.name = name;
    this.studio = studio;
    this.specialty = specialty;
    this.experience = experience;
}

let gamesArray = [
    new Game("G001", "Fortnite", "Battle Royale", "Free", 4.8),
    new Game("G002", "Minecraft", "Sandbox", "$29.99", 4.9),
    new Game("G003", "Valorant", "Tactical Shooter", "Free", 4.7),
    new Game("G004", "Call of Duty: Black Ops 7", "FPS", "$49.99", 4.5),
    new Game("G005", "Apex Legends", "Battle Royale", "Free", 4.6)
];

let developersArray = [
    new Developer("D001", "Adnan AL-Sheikh", "ZAKA Labs", "Leadership & Strategy", "6 Years"),
    new Developer("D002", "Khaled Al-Jabri", "ZAKA Labs", "Full Stack Development", "4 Years"),
    new Developer("D003", "Moayad AL-Sawafi", "ZAKA Labs", "UI/UX & Frontend", "3 Years"),
    new Developer("D004", "Ziyad Al-Hinai", "ZAKA Labs", "Game Logic & AI", "5 Years")
];

function renderGamesTable(data) {
    if (data === undefined) { data = gamesArray; }

    var tbody = document.getElementById('games-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var game = data[i];
        var row = '<tr>' +
            '<td>' + game.id + '</td>' +
            '<td>' + game.title + '</td>' +
            '<td>' + game.genre + '</td>' +
            '<td>' + game.price + '</td>' +
            '<td><span class="badge bg-warning text-dark">' + game.rating + '</span></td>' +
            '</tr>';
        tbody.innerHTML += row;
    }

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No games found.</td></tr>';
    }
}

function renderDevelopersTable(data) {
    if (data === undefined) { data = developersArray; }

    var tbody = document.getElementById('developers-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var dev = data[i];
        var row = '<tr>' +
            '<td>' + dev.id + '</td>' +
            '<td>' + dev.name + '</td>' +
            '<td>' + dev.studio + '</td>' +
            '<td>' + dev.specialty + '</td>' +
            '<td>' + dev.experience + '</td>' +
            '</tr>';
        tbody.innerHTML += row;
    }

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No developers found.</td></tr>';
    }
}

function addNewGame(event) {
    event.preventDefault();

    var id = "G" + Math.floor(Math.random() * 900 + 100).toString();

    var title = document.getElementById('game-title').value.trim();
    var genre = document.getElementById('game-genre').value.trim();
    var price = document.getElementById('game-price').value.trim();
    var rating = parseFloat(document.getElementById('game-rating').value);

    gamesArray.push(new Game(id, title, genre, price, rating));

    renderGamesTable();

    event.target.reset();

    showAlert('game-alert', 'Game "' + title + '" added successfully!', 'success');
}

function addNewDeveloper(event) {
    event.preventDefault();

    var id = "D" + Math.floor(Math.random() * 900 + 100).toString();

    var name = document.getElementById('dev-name').value.trim();
    var studio = document.getElementById('dev-studio').value.trim();
    var specialty = document.getElementById('dev-specialty').value.trim();
    var experience = document.getElementById('dev-exp').value.trim();

    developersArray.push(new Developer(id, name, studio, specialty, experience));

    renderDevelopersTable();

    event.target.reset();

    showAlert('dev-alert', 'Developer "' + name + '" added successfully!', 'success');
}

function filterGames() {
    var query = document.getElementById('game-search').value.toLowerCase();

    var filtered = gamesArray.filter(function (g) {
        return g.title.toLowerCase().indexOf(query) !== -1 ||
            g.genre.toLowerCase().indexOf(query) !== -1;
    });

    renderGamesTable(filtered);
}

function filterDevelopers() {
    var query = document.getElementById('dev-search').value.toLowerCase();

    var filtered = developersArray.filter(function (d) {
        return d.name.toLowerCase().indexOf(query) !== -1 ||
            d.studio.toLowerCase().indexOf(query) !== -1;
    });

    renderDevelopersTable(filtered);
}

function validateQuestionnaire(event) {
    event.preventDefault();

    var email = document.getElementById('q-email').value.trim();
    var username = document.getElementById('q-username').value.trim();
    var age = document.getElementById('q-age').value.trim();
    var feedback = document.getElementById('q-feedback').value.trim();

    var emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    var usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    var ageNum = parseInt(age);

    var isValid = true;

    if (!emailPattern.test(email)) {
        setInvalid('q-email', 'q-email-feedback', 'Please enter a valid email (e.g. name@domain.com).');
        isValid = false;
    } else {
        setValid('q-email', 'q-email-feedback');
    }

    if (!usernamePattern.test(username)) {
        setInvalid('q-username', 'q-username-feedback', 'Username must be 3-20 chars: letters, numbers, underscores only.');
        isValid = false;
    } else {
        setValid('q-username', 'q-username-feedback');
    }

    if (isNaN(ageNum) || ageNum < 13 || ageNum > 99) {
        setInvalid('q-age', 'q-age-feedback', 'Age must be a number between 13 and 99.');
        isValid = false;
    } else {
        setValid('q-age', 'q-age-feedback');
    }

    if (feedback.length < 20) {
        setInvalid('q-feedback', 'q-feedback-feedback', 'Feedback must be at least 20 characters long.');
        isValid = false;
    } else {
        setValid('q-feedback', 'q-feedback-feedback');
    }

    var statusDiv = document.getElementById('submission-status');
    if (isValid) {
        statusDiv.className = 'alert alert-success mt-3';
        statusDiv.innerHTML = 'Thank you! Your feedback has been submitted successfully.';
        event.target.reset();
        clearValidation(['q-email', 'q-username', 'q-age', 'q-feedback']);
    } else {
        statusDiv.className = 'alert alert-danger mt-3';
        statusDiv.innerHTML = 'Please fix the errors highlighted above before submitting.';
    }
}

function setInvalid(inputId, feedbackId, message) {
    var input = document.getElementById(inputId);
    var feedback = document.getElementById(feedbackId);
    if (input) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
    if (feedback) { feedback.textContent = message; }
}

function setValid(inputId, feedbackId) {
    var input = document.getElementById(inputId);
    var feedback = document.getElementById(feedbackId);
    if (input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
    if (feedback) { feedback.textContent = ''; }
}

function clearValidation(ids) {
    for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el) { el.classList.remove('is-valid', 'is-invalid'); }
    }
}

function calculateBill(event) {
    event.preventDefault();

    var price = parseFloat(document.getElementById('item-price').value);
    var quantity = parseInt(document.getElementById('item-qty').value);
    var age = parseInt(document.getElementById('user-age').value);

    var subtotal = price * quantity;
    var total = subtotal;
    var discountMsg = '';
    var discountTotal = 0;

    if (age >= 60) {
        var seniorDiscount = total * 0.15;
        total -= seniorDiscount;
        discountTotal += seniorDiscount;
        discountMsg += '<li>Senior Discount (15%): -$' + seniorDiscount.toFixed(2) + '</li>';
    } else if (age >= 13 && age <= 22) {
        var studentDiscount = total * 0.05;
        total -= studentDiscount;
        discountTotal += studentDiscount;
        discountMsg += '<li>Student Discount (5%): -$' + studentDiscount.toFixed(2) + '</li>';
    }

    if (quantity >= 5) {
        var bulkDiscount = total * 0.05;
        total -= bulkDiscount;
        discountTotal += bulkDiscount;
        discountMsg += '<li>Bulk Purchase Discount (5%): -$' + bulkDiscount.toFixed(2) + '</li>';
    }

    if (discountMsg === '') {
        discountMsg = '<li>No discounts applied for this purchase.</li>';
    }

    var resultDiv = document.getElementById('calc-result');
    resultDiv.innerHTML =
        '<div class="alert alert-info mt-4">' +
        '<h5 class="mb-3">Purchase Summary</h5>' +
        '<p>Unit Price: $' + price.toFixed(2) + ' \xD7 ' + quantity + ' = $' + subtotal.toFixed(2) + '</p>' +
        '<hr><strong>Discounts Applied:</strong><ul>' + discountMsg + '</ul>' +
        '<hr><h4 class="mb-0">Final Total: $' + total.toFixed(2) + '</h4>' +
        '</div>';
}

var triviaQuestions = [
    {
        question: "Fortnite is available on ZAKA Store. What is its price?",
        options: ["$9.99", "$29.99", "Free", "$4.99"],
        correct: 2
    },
    {
        question: "Which game on ZAKA Store has the highest rating of 4.9 stars?",
        options: ["Fortnite", "Valorant", "Call of Duty: Black Ops 7", "Minecraft"],
        correct: 3
    },
    {
        question: "Call of Duty: Black Ops 7 is listed on ZAKA Store. What genre does it belong to?",
        options: ["Battle Royale", "Sandbox", "FPS", "RPG"],
        correct: 2
    },
    {
        question: "In Minecraft (available on ZAKA Store), what material is required to build a Nether Portal?",
        options: ["Iron Blocks", "Diamond Blocks", "Obsidian", "Gold Blocks"],
        correct: 2
    },
    {
        question: "Which company developed Fortnite, one of ZAKA's featured games?",
        options: ["Activision", "Epic Games", "Riot Games", "EA Sports"],
        correct: 1
    },
    {
        question: "How many players start a standard solo Fortnite Battle Royale match?",
        options: ["50 players", "75 players", "100 players", "150 players"],
        correct: 2
    },
    {
        question: "What is the price of Call of Duty: Black Ops 7 on ZAKA Store?",
        options: ["Free", "$29.99", "$39.99", "$49.99"],
        correct: 3
    },
    {
        question: "Minecraft on ZAKA Store falls under which genre?",
        options: ["Battle Royale", "Sandbox", "FPS", "Strategy"],
        correct: 1
    }
];

var currentQuestion = 0;
var score = 0;
var quizTimer = null;
var timeLeft = 15;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 15;

    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= triviaQuestions.length) {
        showQuizResult();
        return;
    }

    var q = triviaQuestions[currentQuestion];

    document.getElementById('question-number').textContent =
        'Question ' + (currentQuestion + 1) + ' of ' + triviaQuestions.length;

    document.getElementById('question-text').textContent = q.question;

    var optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    for (var i = 0; i < q.options.length; i++) {
        (function (index) {
            var btn = document.createElement('button');
            btn.className = 'btn btn-outline-light btn-lg w-100 mb-2 option-btn';
            btn.textContent = (index + 1) + '. ' + q.options[index];

            btn.addEventListener('click', function () {
                checkAnswer(index);
            });

            optionsContainer.appendChild(btn);
        })(i);
    }

    timeLeft = 15;
    clearInterval(quizTimer);
    updateTimerDisplay();

    quizTimer = setInterval(function () {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            checkAnswer(-1);
        }
    }, 1000);
}

function updateTimerDisplay() {
    var timerEl = document.getElementById('quiz-timer');
    if (!timerEl) return;

    timerEl.textContent = timeLeft + 's';

    if (timeLeft > 8) {
        timerEl.className = 'badge bg-success fs-5';
    } else if (timeLeft > 4) {
        timerEl.className = 'badge bg-warning text-dark fs-5';
    } else {
        timerEl.className = 'badge bg-danger fs-5';
    }
}

function checkAnswer(selectedIndex) {
    clearInterval(quizTimer);

    var correctIndex = triviaQuestions[currentQuestion].correct;
    var buttons = document.querySelectorAll('.option-btn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (buttons[correctIndex]) {
        buttons[correctIndex].classList.remove('btn-outline-light');
        buttons[correctIndex].classList.add('btn-success');
    }

    if (selectedIndex === correctIndex) {
        score++;
        showFeedback('Correct! Well done!', 'success');
    } else if (selectedIndex === -1) {
        showFeedback('Time\'s up! The correct answer is highlighted in green.', 'warning');
    } else {
        if (buttons[selectedIndex]) {
            buttons[selectedIndex].classList.remove('btn-outline-light');
            buttons[selectedIndex].classList.add('btn-danger');
        }
        showFeedback('Wrong! The correct answer is highlighted in green.', 'danger');
    }

    document.getElementById('current-score').textContent = score;

    setTimeout(function () {
        currentQuestion++;
        loadQuestion();
    }, 1500);
}

function showFeedback(message, type) {
    var feedbackEl = document.getElementById('quiz-feedback');
    if (!feedbackEl) return;

    feedbackEl.className = 'alert alert-' + type + ' mt-3';
    feedbackEl.textContent = message;
    feedbackEl.style.display = 'block';

    setTimeout(function () {
        feedbackEl.style.display = 'none';
    }, 1200);
}

function showQuizResult() {
    document.getElementById('quiz-area').style.display = 'none';

    var resultDiv = document.getElementById('quiz-result');
    resultDiv.style.display = 'block';

    var percentage = Math.round((score / triviaQuestions.length) * 100);

    var rankMessage = '';
    var rankClass = '';

    if (percentage === 100) {
        rankMessage = 'LEGENDARY! Perfect score! You are a true ZAKA Gaming master!';
        rankClass = 'text-warning';
    } else if (percentage >= 75) {
        rankMessage = 'Excellent! You really know your games!';
        rankClass = 'text-success';
    } else if (percentage >= 50) {
        rankMessage = 'Good effort! Keep playing and you will improve!';
        rankClass = 'text-info';
    } else {
        rankMessage = 'Keep practicing! Every match makes you better!';
        rankClass = 'text-danger';
    }

    resultDiv.innerHTML =
        '<div class="glass-card text-center py-4">' +
        '<h2 class="mb-3">Quiz Complete!</h2>' +
        '<div class="display-1 mb-3">' + percentage + '%</div>' +
        '<h4 class="' + rankClass + ' mb-3">' + rankMessage + '</h4>' +
        '<p class="lead">You got <strong>' + score + '</strong> out of <strong>' + triviaQuestions.length + '</strong> questions right.</p>' +
        '<div class="progress mb-4" style="height:20px;">' +
        '<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:' + percentage + '%">' + percentage + '%</div>' +
        '</div>' +
        '<button onclick="startQuiz()" class="btn btn-primary btn-lg me-2">Play Again</button>' +
        '<button onclick="resetQuiz()" class="btn btn-outline-light btn-lg">Back to Start</button>' +
        '</div>';
}

function resetQuiz() {
    document.getElementById('quiz-start').style.display = 'block';
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    currentQuestion = 0;
    score = 0;
}

function updateBanner() {
    var bannerText = document.getElementById('banner-text');
    if (!bannerText) return;

    var now = new Date();
    var dateStr = now.toLocaleDateString('en-GB');
    var timeStr = now.toLocaleTimeString();

    bannerText.innerHTML =
        'Welcome to the ZAKA Gaming Platform! Today is ' + dateStr +
        ', and the time is ' + timeStr +
        ' \u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0 ' +
        '\uD83D\uDD79\uFE0F Explore Games \u2022 Join Clans \u2022 Support Omani Developers \u00A0\u00A0\u00A0';
}

function showAlert(containerId, message, type) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML =
        '<div class="alert alert-' + type + ' alert-dismissible fade show mt-2" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
        '</div>';

    setTimeout(function () {
        container.innerHTML = '';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    renderGamesTable();
    renderDevelopersTable();
    updateBanner();
    setInterval(updateBanner, 1000);
});
