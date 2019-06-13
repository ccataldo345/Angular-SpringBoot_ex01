import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string

//  todos = [
//    new Todo(1, "Learn to write", false, new Date()),
//    new Todo(2, "Learn to read", true, new Date()),
//    new Todo(3, "Learn to talk", false, new Date()),
//    //{id:1, description:"Learn to write"},
//    //{id:2, description:"Learn to read"},
//    //{id:3, description:"Learn to talk"},
//  ]

  constructor(
    private todoService: TodoDataService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('chris').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('chris', id).subscribe (
      response => {
        console.log("response");
        this.message= `Delelete of Todo ${id} successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

}
