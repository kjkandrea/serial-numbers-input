import './style.css';
import {SerialNumbersRenderer} from './serialNumbers/SerialNumbersRenderer';
import {SerialNumbers} from './serialNumbers/SerialNumbers';

const appEl = document.getElementById('app')!;

appEl.innerHTML = `
  <main>
    <h1>비밀번호를 입력해주세요.</h1>
    <div id="serial-inputs"></div>
  </main>
`;

const serialInputsEl = document.getElementById('serial-inputs')!;
const serialNumbers = new SerialNumbers(4);
new SerialNumbersRenderer(serialInputsEl, serialNumbers.getNumbers());
