import { Component } from '@angular/core';
import { Todo } from "./todo/todo";
@Component({
  selector: 'todo-app',
  templateUrl: "../html/app.component.html",
  styleUrls: ["../css/app.component.css"], // в массиве, потому что может подключать несколько файлов стилей,
})
export class AppComponent  {
  title: string;
  todosArray: Todo[];

  constructor(){
    this.title = "Angular 2Do";
    this.todosArray = [];
  }

  onTodoAdded(todo: Todo){
    this.todosArray.push(todo);
    this.title = "Angular 2Do";
  }

}
