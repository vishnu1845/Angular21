import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Binding } from './binding/binding';
import { Signal } from './signal/signal';
import { ControlFlows } from './control-flows/control-flows';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Binding, Signal, ControlFlows],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21');
}
