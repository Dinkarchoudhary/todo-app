import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  title : string | undefined; // need to check why are using undefined
  desc : string |undefined;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  ngOnInit(): void {
    
  }

  constructor() { }
  
  onAddSubmit(){
    const todo ={
      sno : Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      title: this.title,
      desc: this.desc,
      active : true
    };
    this.todoAdd.emit(todo);
    //Clear data after Add Button Called
    this.title="";
    this.desc ="";
  }
}
