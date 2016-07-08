import {Component,OnInit} from '@angular/core';
import {TodoStore} from '../../shared/todo-store.provider';

@Component({
  selector: 'todo-list-view',
  template: require('./todo-list-view.html')
})
export class TodoListView implements OnInit {
  constructor(private todoStore:TodoStore){

  }

  ngOnInit(){
    this.todoStore.findAll();
  }
}
