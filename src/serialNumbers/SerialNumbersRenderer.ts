import {Numbers} from './entity';

export class SerialNumbersRenderer {
  private readonly inputs: HTMLInputElement[];
  private readonly lengthLimit: number;

  constructor(rootEl: HTMLElement, numbers: Numbers) {
    this.inputs = this.generateInputs(numbers);
    this.lengthLimit = numbers.length - 1;
    this.render(rootEl);
    this.bindInputEvents();
  }

  public getValues(): Numbers {
    return this.inputs.map((_, i) => this.getValue(i));
  }

  public getValue(index: number): Numbers[number] {
    if (index > this.lengthLimit) {
      throw new Error(`${this.lengthLimit}보다 작은 정수를 입력해주세요.`);
    }
    const {value} = this.inputs[index];
    return value ? Number(value) : null;
  }

  private render(rootEl: HTMLElement) {
    rootEl.append(...this.inputs);
  }

  private generateInputs(numbers: Numbers) {
    return numbers.map(number => this.generateInput(number));
  }

  private generateInput(value: Numbers[number]) {
    const inputEl = document.createElement('input');
    inputEl.type = 'tel';
    inputEl.value = typeof value === 'number' ? String(value) : '';
    inputEl.maxLength = 1;

    return inputEl;
  }

  private bindInputEvents() {
    this.inputs.forEach((input, i) => this.bindInputEvent(input, i));
  }

  private bindInputEvent(inputEl: HTMLInputElement, index: number) {
    inputEl.addEventListener('focus', e => this.onFocusInput(e));
    inputEl.addEventListener('keyup', e => this.onKeyupInput(e, index));
  }

  private onFocusInput(e: Event) {
    const inputEl = e.currentTarget as HTMLInputElement;
    inputEl.value = '';
  }

  private onKeyupInput(e: Event, index: number) {
    e.preventDefault();
    const inputEl = e.currentTarget as HTMLInputElement;
    const {value} = inputEl;
    if (Number.isNaN(Number(value))) {
      alert('숫자만 입력해주세요.');
      return;
    }

    if (this.lengthLimit >= index + 1) this.inputFocus(index + 1);
  }

  private inputFocus(index: number) {
    const input = this.inputs[index];
    if (input) input.focus();
  }
}
