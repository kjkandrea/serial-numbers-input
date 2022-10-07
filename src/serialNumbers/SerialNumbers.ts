import {Numbers} from './entity';

export class SerialNumbers {
  private numbers: Numbers;

  constructor(length: number) {
    this.numbers = Array.from({length}, () => null);
  }

  public getNumbers(): Numbers {
    return [...this.numbers];
  }
}
