import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    PiesListComponent,
    TaskListComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
