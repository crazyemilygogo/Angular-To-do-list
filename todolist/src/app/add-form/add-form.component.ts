
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() addTodoEvent = new EventEmitter();

  placeholderText = 'Title...';
  todoText = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo($event) {
    this.addTodoEvent.emit(this.todoText);
    console.log('輸入的文字為 : ' + this.todoText);
  }

  changeTodoText($event) {
    this.todoText = ($event.target as HTMLInputElement).value;
  }

}

