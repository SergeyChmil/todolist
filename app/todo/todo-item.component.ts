import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo} from "./todo";

@Component({
  selector: "todo-item",
  templateUrl: "./html/todo-item.component.html",
  styleUrls: ["./css/todo-item.component.css"]
})

export class TodoItem{
  @Input() todo: Todo;
  @Output() deleted = new EventEmitter();

  toggleDone(){
    this.todo.isDone = !this.todo.isDone;
  }

  delete(){
    this.deleted.emit(this.todo);
  }
}
