import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Input() i:number | undefined;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();

  onHandleDelete(todo:Todo | undefined){
    this.todoDelete.emit(todo);
    console.log("OnDelete is trigered");
  }

  onCheckboxClick(todo : Todo | undefined){
    this.todoCheckBox.emit(todo);
    console.log(todo);
  }
  ngOnInit(): void {
    
  }
}
