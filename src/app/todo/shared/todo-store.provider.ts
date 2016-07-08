import {Injectable} from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import {BehaviorSubject,Observable} from 'rxjs/Rx'

import {ApiCrud} from '../../shared/api-crud';
import {Todo} from './todo-model';

const httpOptions = new RequestOptions({
  headers: new Headers({
    'Content-Type':'application/json'
  })
})

const URI = 'http://localhost:3002/todo';

@Injectable()
export class TodoStore implements ApiCrud<Todo>{
  state$: BehaviorSubject<Todo[]>;
  private store: Todo[]= [];

  constructor(private http:Http){
    this.state$ = new BehaviorSubject<Todo[]>(this.store);
  }

  create(todo:Todo):void{
    this.http.post(URI,JSON.stringify(todo),httpOptions)
    .map((res:Response)=> res.json())
    .do((data:Todo)=>this.store = [...this.store,data])
    .toPromise()
    .then(()=>this.state$.next(this.store))
    .catch(err=>console.error(err))
  }
  findAll(params?:any):void{
    this.http.get(URI,httpOptions)
    .map((res:Response)=> res.json())
    .do((data:Todo[])=>this.store = data)
    .toPromise()
    .then(()=>this.state$.next(this.store))
    .catch(err=>console.error(err))
  }
  findOne(id:string): Observable<Todo>{
    return this.http.get(`${URI}/${id}`,httpOptions)
    .map((res:Response)=> res.json());
  }
  update(todo:Todo):void{
    this.http.put(`${URI}/${todo.id}`,JSON.stringify(todo),httpOptions)
    .map((res:Response)=> res.json())
    .toPromise()
    .then((updatedTodo:Todo)=>{
      this.store[this.store.indexOf(todo)] = updatedTodo;
      this.store = [...this.store];
      this.state$.next(this.store)
    })
    .catch(err=>console.error(err))
  }
  remove(todo:Todo):void{
    this.http.delete(`${URI}/${todo.id}`,httpOptions)
    .map((res:Response)=> res.json())
    .toPromise()
    .then(()=> {
      this.store = this.store.filter(item => item.id !== todo.id);
      this.state$.next(this.store)
    })
    .catch(err=>console.error(err))
  }
}
