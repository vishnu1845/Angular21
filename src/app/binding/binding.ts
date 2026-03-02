import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
  // Interpollation
  public readonly title = signal('Angular21')

  // Event binding
  handleEvent(event:Event) {
    // console.log(event);
    console.log((event.target as HTMLInputElement).value);
  }

  inputChange(type:string) {
    console.log(type);
  }

  btnClick(data:any) {
    console.log(data.type);
  }

  // Property binding
  public img = '/bsc.jfif'

  isToggled = signal(false);
  toggle() {
    this.isToggled.set(!this.isToggled());
  }

  // Two way binding
  public userName = signal('@Whalex');
  public age:number = 23;


  public userData = signal({
    name:'alex',
    age:23,
    email: 'alex@123'
  })

  updatedUSerData(key:string, value:string) {
      this.userData.update(v => ({...v,[key]: value}))
  }
}
