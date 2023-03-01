import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit{
constructor(private service: AppServiceService,private active:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.getprojects();
  }
  projects:any
  getprojects(){
    this.service.getprojects().subscribe((Response)=>{
      this.projects = Response
    })
  }

}
