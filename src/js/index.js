const bingoBoardElement = document.getElementById('bingo-board');
const userBoardElement = document.getElementById('user-board');
const pcBoardElement = document.getElementById('pc-board');
const buttonStartElement = document.getElementById('button-start');
const buttonRestartElement = document.getElementById('button-restart');
const gameTextElement = document.getElementById('game-text');

let userChoices = [];
let pcChoices = [];
let numbers = [];
let contador = 0;

const drawBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index < 100; index++) {
    let newSpanCenter = document.createElement('span');
    newSpanCenter.classList = 'bingo__number';
    newSpanCenter.dataset.bingo = index;
    newSpanCenter.textContent = index;
    fragment.append(newSpanCenter);
  }

  bingoBoardElement.append(fragment);
};

const drawUserBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index < 16; index++) {
    const randomNumber = Math.floor(Math.random() * 98) + 1;
    let newSpanLeft = document.createElement('span');
    newSpanLeft.classList = 'number';
    newSpanLeft.dataset.number = randomNumber;
    newSpanLeft.textContent = randomNumber;
    userChoices.push(randomNumber);
    fragment.append(newSpanLeft);
  }
  console.log(userChoices);
  userBoardElement.append(fragment);
};

const drawPcBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index < 16; index++) {
    const randomNumber = Math.floor(Math.random() * 98) + 1;
    let newSpanRight = document.createElement('span');
    newSpanRight.classList = 'number';
    newSpanRight.dataset.number = randomNumber;
    newSpanRight.textContent = randomNumber;
    pcChoices.push(randomNumber);
    fragment.append(newSpanRight);
  }
  console.log(pcChoices);
  pcBoardElement.append(fragment);
};

const startBingo = () => {
  console.log('HOLI');
  let contador = 0;
  buttonStartElement.classList.add('hide');
  gameTextElement.classList.remove('hide');

  const bingoStep = () => {
    if (contador < 99) {
      const randomNumber = Math.floor(Math.random() * 99) + 1;
      if (numbers.includes(randomNumber)) {
        bingoStep();
      } else {
        numbers.push(randomNumber);
        const selectedNumberElement = document.querySelector(
          `[data-bingo='${randomNumber}']`
        );
        selectedNumberElement.classList.add('number-appeared');
        console.log(contador);
        contador++;
        gameTextElement.textContent = `Número:${randomNumber}`;

        // Llamar recursivamente después de 200 milisegundos
        setTimeout(bingoStep, 200);
      }
    }
  };

  // Iniciar el bucle
  //buttonRestartElement.classList.remove('hide');
  bingoStep();
};

buttonStartElement.addEventListener('click', startBingo);

drawBoard();
drawUserBoard();
drawPcBoard();
