const riverNames = [
    "Sakarya", "Gediz", "Büyük Menderes", "Manavgat", 
    "Göksu", "Seyhan", "Ceyhan", "Fırat", 
    "Dicle", "Yeşilırmak", "Kızılırmak", "Çoruh"
];

const allBarajlar = [
    { text: "Gökçekaya", pId: 0 }, { text: "Sarıyar", pId: 0 }, { text: "Porsuk", pId: 0 },
    { text: "Demirköprü", pId: 1 },
    { text: "Adıgüzel", pId: 2 }, { text: "Kemer", pId: 2 },
    { text: "Oymapınar", pId: 3 }, { text: "Manavgat", pId: 3 },
    { text: "Gezende", pId: 4 }, { text: "Kayraktepe", pId: 4 },
    { text: "Çatalan", pId: 5 }, { text: "Seyhan", pId: 5 },
    { text: "Kartalkaya", pId: 6 }, { text: "Aslantaş", pId: 6 }, { text: "Menzelet", pId: 6 }, { text: "Sır", pId: 6 }, { text: "Berke", pId: 6 },
    { text: "Keban", pId: 7 }, { text: "Karakaya", pId: 7 }, { text: "Atatürk", pId: 7 },
    { text: "Devegeçidi", pId: 8 }, { text: "Kralkızı", pId: 8 }, { text: "Ilısu", pId: 8 },
    { text: "Hasan Uğurlu", pId: 9 }, { text: "Suat Uğurlu", pId: 9 }, { text: "Kılıçkaya", pId: 9 }, { text: "Almus", pId: 9 },
    { text: "Derbent", pId: 10 }, { text: "Altınkaya", pId: 10 }, { text: "Kapulukaya", pId: 10 }, { text: "Kesikköprü", pId: 10 }, { text: "Hirfanlı", pId: 10 },
    { text: "Deriner", pId: 11 }, { text: "Yusufeli", pId: 11 }
];

let gamePool = [];
let currentCard = null;
let isGameOver = false;
let totalCorrectAnswers = 0;
let totalPlacedAnswers = 0;

function initGame() {
    isGameOver = false;
    totalCorrectAnswers = 0;
    totalPlacedAnswers = 0;
    
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("fanus-container").style.display = "block";
    document.getElementById("game-info").innerText = "Barajı yerleştirmek için tabloya dokunun.";
    
    for (let i = 0; i < 12; i++) {
        let container = document.getElementById(`container-${i}`);
        if (container) container.innerHTML = "";
    }

    gamePool = [...allBarajlar];
    for (let i = gamePool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gamePool[i], gamePool[j]] = [gamePool[j], gamePool[i]];
    }
    
    drawNextCard();
}

function drawNextCard() {
    const statusText = document.getElementById("fanus-status");
    const cardText = document.getElementById("current-card");

    if (statusText && cardText) {
        statusText.innerText = `Fanustaki Kalan Baraj: ${gamePool.length}`;
        if (gamePool.length > 0) {
            currentCard = gamePool.pop();
            cardText.innerText = currentCard.text;
        } else {
            currentCard = null;
            cardText.innerText = "Fanus Bitti!";
            endGameAndCheck();
        }
    }
}

function placeCard(chosenId) {
    if (isGameOver || !currentCard) return;
    
    const container = document.getElementById(`container-${chosenId}`);
    if (!container) return; 
    
    const cardEl = document.createElement("div");
    cardEl.className = "placed-card";
    totalPlacedAnswers++;

    if (currentCard.pId === chosenId) {
        cardEl.classList.add("correct");
        cardEl.innerText = currentCard.text;
        totalCorrectAnswers++;
    } else {
        cardEl.classList.add("wrong");
        cardEl.innerText = `${currentCard.text} (Doğrusu: ${riverNames[currentCard.pId]})`;
    }

    container.appendChild(cardEl);
    container.scrollTop = container.scrollHeight;
    drawNextCard();
}

function endGameAndCheck() {
    isGameOver = true;
    document.getElementById("fanus-container").style.display = "none";
    
    const basari = totalCorrectAnswers / totalPlacedAnswers;
    const infoText = document.getElementById("game-info");
    
    if (basari === 1) {
        infoText.innerHTML = `🔥 Skor: ${totalCorrectAnswers}/${totalPlacedAnswers} <br> Muazzam! Bütün barajlar yerli yerinde.`;
    } else if (basari >= 0.7) {
        infoText.innerHTML = `✨ Skor: ${totalCorrectAnswers}/${totalPlacedAnswers} <br> Harika iş çıkardın, ufak tefek kaçaklar var sadece.`;
    } else {
        infoText.innerHTML = `⚠️ Skor: ${totalCorrectAnswers}/${totalPlacedAnswers} <br> Barajlar taştı hocam! Tekrar yapıp suları durultalım.`;
    }
    
    document.getElementById("restart-btn").style.display = "inline-block";
}

window.onload = initGame;