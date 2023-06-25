import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TodoFilterPipe } from './todo-filter.pipe';

@NgModule({
  declarations: [
    TodosComponent,
    TodoFilterPipe
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class TodosModule { }
