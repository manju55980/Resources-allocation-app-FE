import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TaskAssgComponent } from './task-assg/task-assg.component';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { LabelsComponent } from './labels/labels.component';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { AddToProjectsComponent } from './add-to-projects/add-to-projects.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResgistrationComponent,
    CalendarViewComponent,
    TaskAssgComponent,
    TaskListsComponent,
    LabelsComponent,
    ProjectsComponent,
    CategoriesComponent,
    ProjectEditComponent,
    ProjectDisplayComponent,
    AddToProjectsComponent,
    ProjectTaskComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
