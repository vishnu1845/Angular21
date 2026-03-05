import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  imports: [],
  templateUrl: './todo-task.html',
  styleUrl: './todo-task.css',
})
export class TodoTask {
  // public newTodo = signal('')
  // public todos = signal<{text:string, done:boolean}[]>([]);

  // addTodo() {
  //   const text = this.newTodo().trim();

  //   if (text === '') {
  //     return;
  //   }

  //   this.todos.update(list => [ ...list, {text, done: false}]);

  //   this.newTodo.set('');
  // }

  // toggleTodo( index:number) {
  //   this.todos.update( list => 
  //     list.map((item,i) => 
  //     i === index ? {...item, done:!item.done} : item)
  //   );
  // }

  // deleteTodo(index:number) {
  //   this.todos.update( list =>
  //     list.filter((_, i) => i !== index)
  //   );
  // }





  // public todos = signal<{title:string, done:boolean}[]>([]);
  // public newTodo = signal('');

  // addTask() {
  //   let title = this.newTodo().trim();

  //   if(title === '') return;

  //   this.todos.update(v => ([...v, {title, done:false}]));
  //   this.newTodo.set('');
  // }

  // deleteTodo(index:number) {
  //   this.todos.update((v) => v.filter((_,i) => i !== index));
  //   // this.todos.update((v) => v.filter((item) => item.id !== index));
  // }

  // toggleStatus(index:number) {
  //   this.todos.update((v) => v.map((item, i) => i === index ? {...item, done:!item.done} : item));
  // }





  // public tasks = signal<{title:string, done:boolean}[]>([]);
  // public newTask = signal('');

  // addTodos() {
  //   let title = this.newTask().trim();

  //   if(title === '') return;

  //   this.tasks.update((v) => ([...v, {title, done:false}]));
  //   this.newTask.set('');
  // }

  // deleteTask(index:number) {
  //   this.tasks.update(v => v.filter((_,i) => i !== index));
  // }

  // toggleStatus(index:number) {
  //   this.tasks.update(v => v.map((item,i) => index === i ? {...item, done:!item.done} : item));
  // }



  public todos = signal<{title:string, done:boolean}[]>([]);
  public newTodo = signal('');

  addTask() {
    let title = this.newTodo().trim();

    if(title === '') return;
    this.todos.update(v => ([...v,{title,done:false}]));
    this.newTodo.set(''); 
  }

  deleteTask(index:number) {
    this.todos.update((v) => v.filter((_,i) => i !== index));
  }

  toggleStatus(index:number) {
    this.todos.update(v => v.map((item,i) => index === i ? {...item, done:!item.done} : item));
  }
}
