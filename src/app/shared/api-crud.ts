import {BehaviorSubject,Observable} from 'rxjs/Rx'

export interface ApiCrud<T> {
  state$: BehaviorSubject<T[]>
  create(item:T):void;
  findAll(params?:any):void;
  findOne(id:string): Observable<T>;
  update(item:T):void;
  remove(item:T):void;
}
