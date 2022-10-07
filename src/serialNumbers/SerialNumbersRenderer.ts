import {Numbers} from './entity';

export class SerialNumbersRenderer {
  private readonly inputs: HTMLInputElement[];
  private readonly lengthLimit: number;

  constructor(numbers: Numbers) {
    this.inputs = this.generateInputs(numbers);
    this.lengthLimit = numbers.length - 1;
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

  private generateInputs(numbers: Numbers) {
    return numbers.map(this.generateInput);
  }

  private generateInput(value: Numbers[number]) {
    const inputEl = document.createElement('input');
    inputEl.type = 'tel';
    inputEl.value = typeof value === 'number' ? String(value) : '';

    return inputEl;
  }
}
