import {Component, OnInit} from '@angular/core';
// import {Todo} from './todo/shared/todo-model';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('./app.css')
  ],
  template: require('./app.html')
})
export class App implements OnInit{
  // myTodos: Todo[] = [
  //   {
  //     title: 'apprendre angular2',
  //     description: 'c facile',
  //     dueDate: new Date(),
  //     isDone: false
  //   },
  //   {
  //     title: 'se reposer',
  //     description: 'c facile',
  //     dueDate: new Date(),
  //     isDone: false
  //   }
  // ]

  constructor() {}

  ngOnInit() {

  }
}
