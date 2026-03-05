import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-four-getter-setter',
  imports: [FormsModule],
  templateUrl: './four-getter-setter.html',
  styleUrl: './four-getter-setter.css',
})
export class FourGetterSetter {

  userName:WritableSignal<string> = signal('@Whalex');

  get uName () {
    return this.userName();
  }

  set uName (val:string) {
    this.userName.set(val);
  }

  user:WritableSignal<{name:string,age:number, city:string}> = signal({
    name:'Alex',
    age:23,
    city:'pune'
  })
  
  get userValue() {
    return this.user().name;
  }

  set userValue(val:string) {
    this.user.update(v => ({...v, name:val}));
  }

  get userAge() {
    return this.user().age;
  }

  set userAge (val:number) {
    this.user.update(v => ({...v, age: Number(val)}));
  }

  updateCity(value:string) {
    this.user.update(v => ({...v, city:value}));
  }
}
