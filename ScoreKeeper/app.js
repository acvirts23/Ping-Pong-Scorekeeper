const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

//When clicked we need to add 1 to the player score
//And update the span to add 1 to the score
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            if (p1Score - 1 !== p2Score) {
                isGameOver = true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
                p1Button.disabled = true;
                p2Button.disabled = true;
                winningScore = 3;
            } else {
                winningScore++;
            }

        }
        p1Display.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            if (p2Score - 1 !== p1Score) {
                isGameOver = true;
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
                p1Button.disabled = true;
                p2Button.disabled = true;
                winningScore = 3;
            } else {
                winningScore++;
            }

        }
        p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

//Will reset the game when the reset button is pressed
resetButton.addEventListener('click', reset)

//Resets the game
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}