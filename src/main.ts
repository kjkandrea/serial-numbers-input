import './style.css';
import {SerialNumbersRenderer} from './serialNumbers/SerialNumbersRenderer';
import {SerialNumbers} from './serialNumbers/SerialNumbers';
import {Numbers} from './serialNumbers/entity';

const appEl = document.getElementById('app')!;

appEl.innerHTML = `
  <main>
    <form id="serial-inputs-form">
      <legend>비밀번호를 입력해주세요.</legend>
      <div id="serial-inputs"></div>
      <button type="submit">제출하기</button>
    </form>
  </main>
`;

const serialInputsForm = document.getElementById(
  'serial-inputs-form'
) as HTMLFormElement;
const serialInputsEl = document.getElementById('serial-inputs')!;
const numbers = new SerialNumbers(4).getNumbers();
const serialNumbersRenderer = new SerialNumbersRenderer(
  serialInputsEl,
  numbers
);

const app = {
  setup() {
    this.bindEvent();
  },
  bindEvent() {
    serialInputsForm.addEventListener('submit', e => {
      e.preventDefault();
      this.submit(serialNumbersRenderer.getValues());
    });
  },
  submit(numbers: Numbers) {
    const verify = this.validation(numbers);
    if (!verify) return;
    alert(`완료. 입력된 값 : ${numbers.join(', ')}`);
  },
  validation(numbers: Numbers): boolean {
    const someEmpty = numbers.some(Number.isNaN);

    if (someEmpty) {
      alert('모든 값을 입력해주세요.');
      return false;
    }

    return true;
  },
};

app.setup();
