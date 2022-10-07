import './style.css';
import {SerialNumbersRenderer} from './serialNumbers/SerialNumbersRenderer';
import {SerialNumbers} from './serialNumbers/SerialNumbers';
import {Numbers} from './serialNumbers/entity';

const appEl = document.getElementById('app')!;

appEl.innerHTML = `
  <main>
    <h1>비밀번호를 입력해주세요.</h1>
    <form id="serial-inputs-form">
      <div id="serial-inputs"></div>
      <button type="submit">제출하기</button>
    </form>
  </main>
`;

const serialInputsForm = document.getElementById(
  'serial-inputs-form'
) as HTMLFormElement;
const serialInputsEl = document.getElementById('serial-inputs')!;
const serialNumbers = new SerialNumbers(4);
const serialNumbetsRenderer = new SerialNumbersRenderer(
  serialInputsEl,
  serialNumbers.getNumbers()
);

const app = {
  setup() {
    this.bindEvent();
  },
  bindEvent() {
    serialInputsForm.addEventListener('submit', e => {
      e.preventDefault();
      this.submit(serialNumbetsRenderer.getValues());
    });
  },
  submit(numbers: Numbers) {
    console.log(numbers);
  },
};

app.setup();
