import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http:HttpClient) { }

  //Todo Related API CRUD Operation.....
  getAllTodos(){
    return this.http.get('https://todolist-api.glitch.me/api/todos');
  }
  getTodo(todoData:any){
    return this.http.post('https://todolist-api.glitch.me/api/todo',todoData);
  }
  updateTodo(todoData:any,todo_id:any){
    return this.http.put('https://todolist-api.glitch.me/api/todo/'+todo_id,todoData);
  }
  deleteTodo(todo_id:any){
    return this.http.delete('https://todolist-api.glitch.me/api/todo/'+todo_id);
  }

}
