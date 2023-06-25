import { Component, OnInit } from '@angular/core';
import { TodoApiService } from './todo-api.service';
import { Todo } from './model/Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todoList: any = [];
  public totalRows: number = 0;
  public startLinkIndex: number = 1;
  public searchedTerm: string = '';
  public newTodo: any = '';
  public selectedTodo: any = [];
  public loggedUser: any;

  getCurrentTimeStamp() {
    let dt = new Date();
    let day = dt.getDate();
    let month = dt.getMonth() + 1;
    let year = dt.getFullYear();

    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    let fmt = '';
    if (hour > 12) {
      hour = hour - 12;
      fmt = 'PM';
    } else {
      fmt = 'AM';
    }
    let customTimeStamp = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec + " " + fmt;
    return customTimeStamp;
  }

  constructor(private myTodoService: TodoApiService, private route: Router) {
    this.newTodo = new Todo('', '', this.getCurrentTimeStamp());
  }
  loadTodo() {
    this.myTodoService.getAllTodos()//Obserable
      .subscribe((res: any) => {
        console.log(res);
        this.todoList = res;
        console.log(this.todoList);
        this.totalRows = this.todoList.length;

      });
  }
  resetForm() {
    var titleText = document.getElementById('titleText') as HTMLInputElement;
    var descText = document.getElementById('descText') as HTMLInputElement;
    titleText.value = descText.value = '';
    titleText.focus();
    this.newTodo = new Todo('', '', '');
  }
  isSelect(todo: any) {
    // console.log(todo);
    this.selectedTodo = todo;
    console.log(this.selectedTodo);
    this.newTodo = new Todo(this.selectedTodo.title, this.selectedTodo.description, this.selectedTodo.created);

  }

  ngOnInit(): void {
    //when component will be loaded we will make a call to backend api...
    this.loadTodo();
    this.loggedUser = localStorage.getItem('loggedUser');

  }
  onLogout() {
    localStorage.clear();
    alert('You have Succesfully Logged Out !');
    this.route.navigateByUrl('/users')
  }

  onSubmit() {
    // console.log(this.newTodo);
    let todoData = {
      'title': this.newTodo.title,
      'desc': this.newTodo.desc,
      'created': this.newTodo.created
    };
    this.myTodoService.getTodo(todoData) //Obserable
      .subscribe((res: any) => {
        console.log(res);
        alert(res.msg);
        this.loadTodo();
        this.resetForm();

      });
  }
  onUpdate() {
    console.log(this.newTodo);
    let todoData = {
      'title': this.newTodo.title,
      'desc': this.newTodo.desc,
      'created': this.getCurrentTimeStamp()
    };
    this.myTodoService.updateTodo(todoData, this.selectedTodo._id)//Obserable
      .subscribe((res: any) => {
        console.log(res);
        alert(res.msg);
        this.loadTodo();
        this.resetForm();
        this.selectedTodo = [];

      });

  }
  onDelete() {
    var r = confirm('Do You Want to Delete this Record');
    if (r) {
      this.myTodoService.deleteTodo(this.selectedTodo._id).subscribe((res: any) => {
        console.log(res);
        alert(res.msg);
        this.resetForm();
        this.selectedTodo = [];
        this.loadTodo();
      });
    }
  }

}
