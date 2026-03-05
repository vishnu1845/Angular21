import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Binding } from './binding/binding';
import { Signal } from './signal/signal';
import { ControlFlows } from './control-flows/control-flows';
import { FourGetterSetter } from './four-getter-setter/four-getter-setter';
import { TodoTask } from './todo-task/todo-task';
import { FiveDirectives } from './five-directives/five-directives';
import { Parent } from './parent/parent';
import { Poutput } from './poutput/poutput';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Binding, Signal, ControlFlows, FourGetterSetter, TodoTask, FiveDirectives, Parent, Poutput, DisplayCount, ControlCount ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21');
}
