let intro = document.querySelector('.intro');
let logoImg = document.querySelector('.logoImg');
let boardElement = document.getElementById('board');
const btn = document.getElementById("btn-9");

const secondWait = document.getElementById('waitContainerTwo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
    logoImg.classList.add('active');

    }, 400);


    setTimeout(() => {
        logoImg.classList.remove('active');
        logoImg.classList.add('fade');
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';

    }, 3000);
})


function generateMinesBoard(diamond_positions) {
    const grid = Array.from({ length: 25 }, (_, i) =>
        diamond_positions.includes(i) ? "ðŸ’Ž" : "ðŸ’£"
    );
    return Array.from({ length: 5 }, (_, i) => grid.slice(i * 5, i * 5 + 5));
}

function renderBoard(board) {
    boardElement.innerHTML = board
        .map((row) =>
            row
                .map(
                    (cell) =>
                        `<div><img src="${cell === "ðŸ’Ž"
                            ? "imagens/botaoEstrela.png"
                            : "imagens/botaoAzul.png"                            
                        }" alt="${cell}"></div>`
                )
                .join("")
        )
        .join("");
}


let countdown = 60;

let countdownTimer = null;

const atualizarBotao = () => {
    countdown--;
    btn.innerText = `Wait ${countdown}s` ;
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.innerText = 'GENERATE MINES';
    btn.disabled = false;
    countdown = 60;
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    // handleClickGenerateOpportunity();
    countdownTimer = setInterval(atualizarBotao, 1000)
})

function handleClickGenerateOpportunity() {
        // firstWait.style.display = 'block'
        // secondWait.style.display = 'none';

    // setTimeout(() => {
    //     firstWait.style.display = 'none';
    //     // secondWait.style.display = 'block';
    // }, 5000)
    //
    // setTimeout(() => {
    //     firstWait.style.display = 'none';
    //     // secondWait.style.display = 'none';
    // }, 10000)

            btn.disabled = true;
            const diamond_positions = randomDiamondPositions();
            const board = generateMinesBoard(diamond_positions);
            renderBoard(board);
}





function randomDiamondPositions() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 25));
}





function move() {

    let elem = document.getElementById("greenBar");
    const firstWait = document.getElementById('waitContainer');
    let stepValue = 0;
    let id = setInterval(frame, 100);
    firstWait.style.display ='block';
    handleClickGenerateOpportunity();
    setTimeout(() => {
        firstWait.style.display = 'none';
    }, 12000)

    function frame() {

        if (stepValue >= 100) {
            clearInterval(id);

        } else {
            elem.style.width = (stepValue + 1) + "%";
            elem.innerHTML = (stepValue + 1) + "%...";
            stepValue=(stepValue + 1);

        }
    btn.disabled = true;
    }

}

