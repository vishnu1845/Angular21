import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TrimPipe } from "../custom/trim-pipe";

@Component({
  selector: 'app-six-pipes',
  imports: [CommonModule, TrimPipe],
  templateUrl: './six-pipes.html',
  styleUrl: './six-pipes.css',
})
export class SixPipes {

  public userName = signal('@Whalex');

  public amount = signal<string | number>('1m');

  getAmountNumber() {
    const value = this.amount();

    if (typeof value === 'string' && value.endsWith('m')) {
      return Number(value.replace('m', '')) * 1000000;
    }

    return value;
  }

  public date = new Date();

  public text:string = 'Lorem ipsum dolor sit amet.'
}
