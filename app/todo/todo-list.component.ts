import {Component, Input} from "@angular/core";
import {Todo} from "./todo";

@Component({
  selector: "todo-list",
  templateUrl: "../html/todo-list.component.html",
  styleUrls: ["./css/todo-list.component.css"]
})
export class TodoListComponent{
  @Input() todosArray: Todo[];

  onTodoDeleted(todo: Todo){
    if(todo){
      let index = this.todosArray.indexOf(todo);
        if(index > -1){
          this.todosArray.splice(index,1);
        }
    }
  }
}
