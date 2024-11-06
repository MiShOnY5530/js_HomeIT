let gridSize = 4;
let gameBoard = document.getElementById('gameBoard');
let flips = 0;
let timer;
let time = 0;
let firstCard, secondCard;
let lockBoard = false;
let matchCount = 0;

document.getElementById('gridSize').addEventListener('change', (e) => {
    gridSize = parseInt(e.target.value);
});

document.getElementById('theme').addEventListener('change', (e) => {
    document.body.className = e.target.value;
});

function startGame() {
    gameBoard.innerHTML = '';
    matchCount = 0;
    flips = 0;
    time = 0;
    clearInterval(timer);
    document.getElementById('flips').innerText = flips;
    document.getElementById('time').innerText = time;
    timer = setInterval(() => {
        time++;
        document.getElementById('time').innerText = time;
    }, 1000);
    generateCards();
}

function generateCards() {
    let totalCards = gridSize * gridSize;
    let cardValues = Array.from({length: totalCards / 2}, (_, i) => i + 1);
    let cards = [...cardValues, ...cardValues];
    cards.sort(() => 0.5 - Math.random());

    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    cards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.value;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    flips++;
    document.getElementById('flips').innerText = flips;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch) {
        disableCards();
        document.getElementById('matchSound').play();
        matchCount += 2;
        if (matchCount === gridSize * gridSize) {
            clearInterval(timer);
            alert(`Гра закінчена! Час: ${time} сек, Переворотів: ${flips}`);
        }
    } else {
        unflipCards();
        document.getElementById('mismatchSound').play();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}