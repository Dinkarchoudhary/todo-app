import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;
  localItem :string | null;
  constructor() {
    this.localItem = this.isLocalStorageAvailable() ? localStorage.getItem("todos") : null;
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }
    // this.todos =[
    //   {
    //     sno :1,
    //     title : "This is title",
    //     desc : "Description",
    //     active: true
    //   }
    // ]
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  ngOnInit(): void {
    
  }

  addTodo(todo : Todo)
  {
    this.todos?.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  deleteTodo(todo:Todo){
    this.todos?.splice(this.todos?.indexOf(todo),1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo:Todo){ 
    const index = this.todos?.indexOf(todo);
    if (this.todos !== undefined && index !== undefined)
      this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
