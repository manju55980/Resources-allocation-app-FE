import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { UserComponent } from './user/user.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { TaskAssgComponent } from './task-assg/task-assg.component';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { CategoriesComponent } from './categories/categories.component';
import { LabelsComponent } from './labels/labels.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import{ ProjectEditComponent } from './project-edit/project-edit.component';
import{ ProjectDisplayComponent } from './project-display/project-display.component';
import { AddToProjectsComponent } from './add-to-projects/add-to-projects.component';
import { ProjectTaskComponent } from './project-task/project-task.component'
import { DashBoardComponent } from './dash-board/dash-board.component'
const routes: Routes = [
  {
    path: '',redirectTo: 'user',pathMatch: 'full'
  },
  {
    path:'dashboard', component:DashBoardComponent, canActivate: [AuthGuard]
  },
  {
    path:'dashboard/calendarview', component:CalendarViewComponent, canActivate: [AuthGuard]
  },
  {
    path:'dashboard/projectDisplay', component:ProjectDisplayComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user', component: UserComponent
  },
  {
  path: 'resgistration',component: ResgistrationComponent
  },
  {
  path: 'calendarview',
  component: CalendarViewComponent,
  canActivate: [AuthGuard],
  // data:{
  //  expectedRoles:['Manager','Developer']
  // }
  },
  {
    path: 'taskassg',
    component: TaskAssgComponent,
    canActivate: [AuthGuard,RoleGuard],
    // data:{
    //   expectedRoles:['Manager']
    // }
  },
  {
    path: 'tasklist/:id',
    component: TaskListsComponent,
    canActivate: [AuthGuard,RoleGuard],
    // data:{
    //   expectedRoles:['Manager']
    // }         
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard,RoleGuard],
    // data:{
    //   expectedRoles:['Manager']
    // }
  },
  {
    path:'labels',
    component: LabelsComponent,
    canActivate:[AuthGuard,RoleGuard],
    // data:{
    //   expectedRoles:['Manager']
    // }
  },
  {
    path:'projects',
    component: ProjectsComponent,
    canActivate:[AuthGuard,RoleGuard],
    // data:{
    //   expectedRoles:['Manager']
    // }
  },
  {
    path:'projectEdit/:id',
    component: ProjectEditComponent,
    canActivate:[AuthGuard,RoleGuard],
  },
  {
    path:'projectDisplay',
    component: ProjectDisplayComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'AddMultiUser',
    component:AddToProjectsComponent,
    canActivate:[AuthGuard,RoleGuard],
  },
  {
    path:'projectDisplay/projectTask/:id',
    component:ProjectTaskComponent,
    canActivate:[AuthGuard,]

  },
  {
  path:'projectDisplay/projects',
  component:ProjectsComponent,
  canActivate:[AuthGuard,]
  },
  {
    path:'projectDisplay/projectTask/:id/taskassg',
    component: TaskAssgComponent,
    canActivate:[AuthGuard,],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
