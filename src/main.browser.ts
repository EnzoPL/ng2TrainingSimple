import {provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app/app.component';

//Import route module
import {ROUTER_DIRECTIVES,provideRouter} from '@angular/router';
//Import http module
import {HTTP_PROVIDERS} from '@angular/http';

import {PathLocationStrategy,LocationStrategy} from '@angular/common';
import {AppRoutes} from './app/app.routes';
import {REACTIVE_FORM_DIRECTIVES,FORM_PROVIDERS, provideForms,disableDeprecatedForms} from '@angular/forms'

import {TodoTitlePipe} from './app/todo/shared/todo-title.pipe';
import {TodoItem} from './app/todo/todo-item/todo-item.component';
import {TodoList} from './app/todo/todo-list/todo-list.component';
import {Navbar} from './app/navbar/navbar.component';
import {TodoStore} from './app/todo/shared/todo-store.provider';


const APP_PROVIDERS = [
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  TodoStore
]

const APP_PIPES = [
  TodoTitlePipe
]

const APP_DIRECTIVES = [
  ROUTER_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  TodoItem,
  TodoList,
  Navbar
]

//enableProdMode()  remove ELEMENT_PROBE_PROVIDERS from the array in bootstrap call
bootstrap(App, [
  ...APP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provide(PLATFORM_PIPES, {
    multi: true,
    useValue: APP_PIPES
  }),
  provide(PLATFORM_DIRECTIVES, {
    multi: true,
    useValue: APP_DIRECTIVES
  }),
  provideRouter(AppRoutes)
])
.catch(err => console.error(err));
