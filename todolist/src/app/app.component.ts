import { Component } from '@angular/core';

import { TodoItem } from './shared/todo-item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoItems: TodoItem[] = [{
    id: 1,
    value: 'Hit the gym',
    done: false,
    isDelete: false
  }, {
    id: 2,
    value: 'Pay bills',
    done: true,
    isDelete: false
  }, {
    id: 3,
    value: 'Meet George',
    done: false,
    isDelete: false
  }, {
    id: 4,
    value: 'Buy eggs',
    done: false,
    isDelete: false
  }, {
    id: 5,
    value: 'Read a book',
    done: false,
    isDelete: false
     }, {
    id: 6,
    value: 'Organize office',
    done: false,
    isDelete: false
    }
  ];

  addTodoItem(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false,
      isDelete: false
    });
  }

  deleteTodoItem(item) {
    console.log('delete', item);
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
  }

}