import {Todo} from "../../shared/todo-model";
import {Component,OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoStore} from '../../shared/todo-store.provider';
import {Subscription} from 'rxjs/Rx'

@Component({
  selector: 'todo-detail-view',
  template: require('./todo-detail-view.html')
})
export class TodoDetailView implements OnInit,OnDestroy {
  todo: Todo;
  todoSubscription:Subscription;

  constructor(
    private todoStore:TodoStore,
    private activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit(){
    this.todoSubscription = this.activatedRoute.params
    .map((param:any)=> param.id)
    .mergeMap(id=>this.todoStore.findOne(id))
    .subscribe(todo=>{
      this.todo = todo;
      console.log(todo);
    });
    // this.todoStore.findOne();
  }

  ngOnDestroy(){
    this.todoSubscription.unsubscribe();
    console.log('desinscription activatedRoute.params');
  }
}
