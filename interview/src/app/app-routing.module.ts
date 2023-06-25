import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'html',loadChildren: () => import('./htmlpractice/htmlpractice.module').then(m => m.HtmlpracticeModule)},
  {path:'',loadChildren: () => import('./jspractice/jspractice.module').then(m => m.JspracticeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
