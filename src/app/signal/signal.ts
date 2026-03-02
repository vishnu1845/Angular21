import { NgIf } from '@angular/common';
import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [ReactiveFormsModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

// Signal
    // A signal is a reactive state variable in Angular that automatically updates the UI when its value changes./

 public count:WritableSignal<number> = signal(0);
 
 increase() {
  this.count.update(v => v +1)
 }
 decrease() {
  this.count.update(v => v -1)
 }

//  Computed Signals
    // A Computed Signal in Angular is a read-only reactive value that is derived from one or more signals.

  firstName = signal('');
  lastName = signal('');

  // computed values
  fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`.trim()
  })

  // Form Controls
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');

  // constructor() {
  //   // Sync form value to signals
  //   this.firstNameControl.valueChanges.subscribe(value => {
  //     this.firstName.set(value || '');
  //   });

  //   this.lastNameControl.valueChanges.subscribe(value => {
  //     this.lastName.set(value || '');
  //   });
  // }


  constructor() {

    this.firstNameControl.valueChanges
      .pipe(
        debounceTime(500),           // wait 500ms after user stops typing
        // distinctUntilChanged()       // ignore same consecutive values
      )
      .subscribe(value => {
        this.firstName.set(value || '');
      });

    this.lastNameControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.lastName.set(value || '');
      });
  }

  // Effect
    // An Effect in Angular is a reactive function that automatically runs when the signals used inside it change.

  mode = signal(true);

  // constructor () {

  //   effect(()=> {
  //     if (this.mode()) {
  //       document.body.style.color = 'white';
  //       document.body.style.backgroundColor = 'black';
  //     } else {
  //       document.body.style.color = 'black';
  //       document.body.style.backgroundColor = 'white';
  //     }
  //   })
  // }

  toggel() {
    this.mode.update(v => !v);
  }

}
