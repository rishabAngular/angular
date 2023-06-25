import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo_filter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(entireTodoList: any[], searchedTerm: string): any {
    if (searchedTerm.length >= 3) {
      let searchedTodoList = entireTodoList.filter((todoItem: any) => {
        if (todoItem.title.trim().toLowerCase().includes(searchedTerm.trim().toLowerCase())) {
          return todoItem;
        }
      });
      return searchedTodoList;
    } else {
      return entireTodoList;
    }
  }

}
