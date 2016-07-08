import {RouterConfig, provideRouter} from '@angular/router';
import {HomeView} from './home-view/home-view.component';
import {TodoView} from './todo/todo-view/todo-view.component';
import {TodoCreateView} from './todo/todo-view/todo-create-view/todo-create-view.component';
import {TodoListView} from './todo/todo-view/todo-list-view/todo-list-view.component';
import {TodoDetailView} from './todo/todo-view/todo-detail-view/todo-detail-view.component';

export const AppRoutes: RouterConfig = [
    {path: '', component: HomeView},
    {path: 'todo',
     component: TodoView,
     children: [
       {path:'', component: TodoListView},
       {path:'create', component: TodoCreateView},
       {path: 'detail/:id', component: TodoDetailView}
     ]
  },

]
