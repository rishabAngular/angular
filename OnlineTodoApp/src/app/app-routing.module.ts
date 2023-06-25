import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'',redirectTo:'/users',pathMatch:'full' },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, 
  { path: 'todos',
  canActivate:[AuthGuard],
   loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  { path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
