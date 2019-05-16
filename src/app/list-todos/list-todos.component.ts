import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1, "Learn to write", false, new Date()),
    new Todo(2, "Learn to read", true, new Date()),
    new Todo(3, "Learn to talk", false, new Date()),
    //{id:1, description:"Learn to write"},
    //{id:2, description:"Learn to read"},
    //{id:3, description:"Learn to talk"},
  ]

  constructor() { }

  ngOnInit() {
  }

}