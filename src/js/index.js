let rowNumber = 0;
import { userWordElement } from './dom';
import { labelErrorElement } from './dom';
import { drawGrid } from './functions';
import { drawWord } from './functions';
import { generateRandomWord } from './functions';

drawGrid();
let randomWord = generateRandomWord();
// Escuchamos eventos
userWordElement.addEventListener('keydown', event => {
  // Verificamos si la tecla presionada es "Enter"
  if (event.key === 'Enter') {
    // Evitamos el envío del formulario si la longitud de la palabra no es igual a 5
    if (userWordElement.value.length !== 5) {
      event.preventDefault();
      labelErrorElement.textContent = 'La palabra debe tener 5 letras';
    } else {
      event.preventDefault();
      drawWord(rowNumber, randomWord);
      userWordElement.value = '';
      rowNumber++;
    }
  }
});
console.log(randomWord);
