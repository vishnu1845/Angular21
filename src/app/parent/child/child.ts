import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input() userName!:string;   //old way
  // userName = input<string>();     //new way
  userName = input<string>('Guest');  //default value
}
