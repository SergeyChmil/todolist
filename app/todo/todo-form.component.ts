//класс создающий формы списка

import {Component, Output, EventEmitter} from "@angular/core";
import {Todo} from "./todo";

@Component({
  selector: "todo-form",
  templateUrl: "./html/todo-form.component.html",
  styleUrls:["./css/todo-form.component.css"]
})

export class TodoFormComponent{
  @Output() added = new EventEmitter();

  add(title:string){
    if(title){
      this.added.emit(new Todo(title));// диспатч события с одновременной передачей созданного экземпляра класса To do
    }
  }
}
