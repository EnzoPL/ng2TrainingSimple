import {Component, Input} from '@angular/core';
import {Todo} from '../shared/todo-model';
import {TodoStore} from './../shared/todo-store.provider';

@Component({
  selector: 'todo-list',
  template: require('./todo-list.html'),
  styles: [
    require('./todo-list.css')
  ]
})
export class TodoList {

  constructor(private todoStore:TodoStore){

  }

  @Input() todos: Todo[];
  filterTitle: string = '';

  todoUpdateHandler(todo: Todo) {
    todo.isDone = !todo.isDone;
    this.todoStore.update(todo);
  }

  todoRemoveHandler(todo: Todo) {
    this.todoStore.remove(todo);
  }
}
