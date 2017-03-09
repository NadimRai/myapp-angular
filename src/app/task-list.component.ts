import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
public selectedCompleteness: string = "notDone";
onChange(optionFromMenu) {
  this.selectedCompleteness = optionFromMenu;
  console.log(this.selectedCompleteness);
}
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}