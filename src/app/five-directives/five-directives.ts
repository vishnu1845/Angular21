import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-five-directives',
  imports: [CommonModule],
  templateUrl: './five-directives.html',
  styleUrl: './five-directives.css',
})
export class FiveDirectives {

  public isStatus = signal(false);
  public num = signal(['one','two','three','four','five']);
  public country = 'ind';

  public setcolor = 'aqua';
}
