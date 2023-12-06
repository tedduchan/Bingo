import { bingoBoardElement } from './dom';
import { userBoardElement } from './dom';
import { buttonStartElement } from './dom';
import { buttonRestartElement } from './dom';
import { gameTextElement } from './dom';
import { userTextElement } from './dom';
import { pcTextElement } from './dom';
import { pcBoardElement } from './dom';

let userChoices = [];
let pcChoices = [];
let numbers = [];
let winner = 0;
let userCounter = 0;
let pcCounter = 0;

export const drawBoard = () => {
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

export const drawUserBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index < 16; index++) {
    const randomNumber = Math.floor(Math.random() * 98) + 1;
    if (userChoices.includes(randomNumber)) {
      index = index - 1;
    } else {
      let newSpanLeft = document.createElement('span');
      newSpanLeft.classList = 'number';
      newSpanLeft.dataset.number = randomNumber;
      newSpanLeft.textContent = randomNumber;

      userChoices.push(randomNumber);
      fragment.append(newSpanLeft);
    }
  }

  userBoardElement.append(fragment);
};

export const drawPcBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index < 16; index++) {
    const randomNumber = Math.floor(Math.random() * 98) + 1;
    if (pcChoices.includes(randomNumber)) {
      index = index - 1;
    } else {
      let newSpanRight = document.createElement('span');
      newSpanRight.classList = 'number';
      newSpanRight.dataset.pcNumber = randomNumber;
      newSpanRight.textContent = randomNumber;
      pcChoices.push(randomNumber);
      fragment.append(newSpanRight);
    }
  }

  pcBoardElement.append(fragment);
};

export const startBingo = () => {
  buttonStartElement.classList.add('hide');
  gameTextElement.classList.remove('hide');

  const bingoStep = () => {
    if (winner === 0) {
      const randomNumber = Math.floor(Math.random() * 99) + 1;
      if (numbers.includes(randomNumber)) {
        bingoStep();
      } else {
        numbers.push(randomNumber);
        const selectedNumberElement = document.querySelector(
          `[data-bingo='${randomNumber}']`
        );
        const userNumberElement = document.querySelector(
          `[data-number='${randomNumber}']`
        );
        const pcNumberElement = document.querySelector(
          `[data-pc-number='${randomNumber}']`
        );

        if (userChoices.includes(randomNumber)) {
          userNumberElement.classList.add('number-user-correct');
          userCounter++;
          if (userCounter === 15) {
            winner = 1;
            userTextElement.textContent = 'User Wins';
          }
        }
        if (pcChoices.includes(randomNumber)) {
          pcNumberElement.classList.add('number-pc-correct');
          pcCounter++;
          if (pcCounter === 15) {
            winner = 2;
            pcTextElement.textContent = 'Pc Wins';
          }
        }

        selectedNumberElement.classList.add('number-appeared');

        gameTextElement.textContent = `Número:${randomNumber}`;

        // Llamamos recursivamente después de 200 milisegundos
        setTimeout(bingoStep, 200);
      }
    }
  };

  // Iniciamos el bucle
  bingoStep();
};
