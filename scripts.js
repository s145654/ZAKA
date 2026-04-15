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
    new Game("G003", "Valorant", "Tactical Shooter", "Free", 4.7)
];
let developersArray = [
    new Developer("D001", "Ziyad Arsh", "Oman Indie", "UE5 Specialist", "5 Years"),
    new Developer("D002", "Khaled Bin Omar", "Desert Games", "AI Logic", "3 Years"),
    new Developer("D003", "Ahmed G.", "Muscat Soft", "Graphics Engine", "8 Years")
];
function renderGamesTable(data = gamesArray) {
    const tbody = document.getElementById('games-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    data.forEach(game => {
        const row = `<tr>
            <td>${game.id}</td>
            <td>${game.title}</td>
            <td>${game.genre}</td>
            <td>${game.price}</td>
            <td>${game.rating}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}
function renderDevelopersTable(data = developersArray) {
    const tbody = document.getElementById('developers-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    data.forEach(dev => {
        const row = `<tr>
            <td>${dev.id}</td>
            <td>${dev.name}</td>
            <td>${dev.studio}</td>
            <td>${dev.specialty}</td>
            <td>${dev.experience}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}
function addNewGame(event) {
    event.preventDefault();
    const id = "G" + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const title = document.getElementById('game-title').value;
    const genre = document.getElementById('game-genre').value;
    const price = document.getElementById('game-price').value;
    const rating = document.getElementById('game-rating').value;
    
    gamesArray.push(new Game(id, title, genre, price, rating));
    renderGamesTable();
    event.target.reset();
}
function addNewDeveloper(event) {
    event.preventDefault();
    const id = "D" + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const name = document.getElementById('dev-name').value;
    const studio = document.getElementById('dev-studio').value;
    const specialty = document.getElementById('dev-specialty').value;
    const experience = document.getElementById('dev-exp').value;
    
    developersArray.push(new Developer(id, name, studio, specialty, experience));
    renderDevelopersTable();
    event.target.reset();
}

function filterGames() {
    const query = document.getElementById('game-search').value.toLowerCase();
    const filtered = gamesArray.filter(g => g.title.toLowerCase().includes(query) || g.genre.toLowerCase().includes(query));
    renderGamesTable(filtered);
}

function validateQuestionnaire(event) {
    event.preventDefault();
    const email = document.getElementById('q-email').value;
    const age = document.getElementById('q-age').value;
    const feedback = document.getElementById('q-feedback').value;
    const statusDiv = document.getElementById('submission-status');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const agePattern = /^\d{1,2}$/;
    
    let isValid = true;
    let errors = [];

    if (!emailPattern.test(email)) {
        errors.push("Invalid email format.");
        isValid = false;
    }
    if (!agePattern.test(age) || parseInt(age) < 13) {
        errors.push("Age must be a number and at least 13.");
        isValid = false;
    }
    if (feedback.length < 10) {
        errors.push("Feedback must be at least 10 characters.");
        isValid = false;
    }

    statusDiv.innerHTML = '';
    if (isValid) {
        statusDiv.className = "alert alert-success mt-3";
        statusDiv.innerHTML = "Feedback submitted successfully!";
        event.target.reset();
    } else {
        statusDiv.className = "alert alert-danger mt-3";
        statusDiv.innerHTML = errors.join("<br>");
    }
}

function calculateBill(event) {
    event.preventDefault();
    const price = parseFloat(document.getElementById('item-price').value);
    const quantity = parseInt(document.getElementById('item-qty').value);
    const age = parseInt(document.getElementById('user-age').value);
    const resultDiv = document.getElementById('calc-result');
    
    let total = price * quantity;
    let discountMsg = "No discount applied.";

    if (age >= 60) {
        total = total * 0.9;
        discountMsg = "10% Elderly Discount applied!";
    } else if (total > 100) {
        total = total * 0.95;
        discountMsg = "5% Bulk Discount applied!";
    }

    resultDiv.innerHTML = `
        <div class="alert alert-info mt-3">
            <p>Subtotal: $${(price * quantity).toFixed(2)}</p>
            <p>${discountMsg}</p>
            <hr>
            <h4>Final Total: $${total.toFixed(2)}</h4>
        </div>
    `;
}

function initFunPage() {
    const canvas = document.getElementById('fun-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = document.getElementById('color-picker').value;

        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
}

function clearCanvas() {
    const canvas = document.getElementById('fun-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateBanner() {
    const bannerText = document.getElementById('banner-text');
    if (!bannerText) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    bannerText.innerHTML = `Welcome to ZAKA Gaming website! Today is ${dateStr}, and the time is ${timeStr}`;
}
document.addEventListener('DOMContentLoaded', () => {
    renderGamesTable();
    renderDevelopersTable();
    updateBanner();
    setInterval(updateBanner, 1000);
    initFunPage();
});
