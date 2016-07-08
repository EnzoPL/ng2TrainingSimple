import {Component,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {TodoStore} from '../../shared/todo-store.provider';

@Component({
  selector: 'todo-create-view',
  template: require('./todo-create-view.html'),
  styles: [require('./todo-create-view.css')],
})
export class TodoCreateView implements OnInit{
  todoForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoStore:TodoStore,
    private router:Router
  ) {}

  ngOnInit() {
    this.todoForm = this.createTodoForm();
    this.todoForm.valueChanges
    .do(data=>console.log('raw : ',data))
    .filter(()=>this.todoForm.valid)
    .map(value=>{
      value.title = value.title.toUpperCase();
      return value;
    })
    .subscribe(
      data=> console.log('subscribe (after is valid) : ',data),
      err=> console.log(err)
    );

  }

  private createTodo(){
    this.todoStore.create(this.todoForm.value);
    this.todoStore.state$
    .skip(1)
    .subscribe(
      ()=>this.router.navigate(['/todo'],
      err=>console.error(err)))
  }


  private createTodoForm(): FormGroup {
    return this.formBuilder.group({
      title: ['',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ])],
      description: ['',Validators.required],
      dueDate: ['',Validators.required],

    })
  }
}
