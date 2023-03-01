import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service'
import { ActivatedRoute,Router } from '@angular/router'
@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit{
  constructor(private service:AppServiceService,private router:Router,private activeroute:ActivatedRoute){}
  ngOnInit(): void {
    this.id =this.activeroute.snapshot.params['id']
    this.getprojecttask()
  }
  id:any;
  task:any;
  
getprojecttask(){
  this.service.getProjectTask(this.id).subscribe((data:any)=>{
    this.task = data;
  })
}
}
