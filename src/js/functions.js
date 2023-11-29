import { userWordElement } from './dom';
import { gameBoardElement } from './dom';
import { wordleWords5 } from './dom';
import { wordLength } from './dom';
import { chances } from './dom';

export const drawGrid = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < chances; index++) {
    const newDiv = document.createElement('div');
    newDiv.id = index;
    newDiv.classList = 'game-board__row';

    for (let index = 0; index < wordLength; index++) {
      const newSpan = document.createElement('span');
      newSpan.classList = 'letter';
      newDiv.append(newSpan);
    }
    fragment.append(newDiv);
  }
  gameBoardElement.append(fragment);
};

export const drawWord = (rowNumber, randomWord) => {
  const thisRow = document.getElementById(rowNumber);
  for (let index = 0; index < wordLength; index++) {
    thisRow.children[index].textContent = userWordElement.value.charAt(index);
    if (userWordElement.value.charAt(index) === randomWord.charAt(index)) {
      thisRow.children[index].classList.add('letter--correct');
    } else if (randomWord.includes(userWordElement.value.charAt(index))) {
      thisRow.children[index].classList.add('letter--present');
    } else {
      thisRow.children[index].classList.add('letter--incorrect');
    }
  }
};

export const generateRandomWord = () => {
  // Generamos un número aleatorio dentro del rango del array
  const randomNumber = Math.floor(Math.random() * wordleWords5.length);

  // Devolvemos la palabra correspondiente al número aleatorio
  return wordleWords5[randomNumber];
};
