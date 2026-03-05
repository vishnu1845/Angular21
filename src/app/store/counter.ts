import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  
  public count = signal(0);

  increament() {
    this.count.update(v => v+1);
  }

  decrement() {
    this.count.update(v => v -1);
  }

  reset() {
    this.count.set(0);
  }
}
