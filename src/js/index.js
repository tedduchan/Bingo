import { buttonStartElement } from './dom';
import { drawBoard } from './functions';
import { drawUserBoard } from './functions';
import { startBingo } from './functions';
import { drawPcBoard } from './functions';

buttonStartElement.addEventListener('click', startBingo);

drawBoard();
drawUserBoard();
drawPcBoard();
