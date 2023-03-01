import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
 constructor(private service:AppServiceService,private router:Router){}
  ngOnInit(): void {
   this.getlabel();
   this.getcategories();
   this.getprojectData();
  }
  @ViewChild('project')
  form!: NgForm;
  postproject(data:any){
  this.service.postprojects(data).subscribe((Response)=>{
    console.log('Data Posted',Response)
    this.form.reset();
  },(error)=>{
    console.log('Error is ',error);
  })
  }
  labels:any
  getlabel(){
  this.service.fetchlabels().subscribe((Response)=>{
    this.labels = Response;
  },(error)=>{
    console.log(error);
  })
  }
  categories:any
  getcategories(){
    this.service.fetchcategories().subscribe((Response)=>{
      this.categories = Response;
    
    },(error)=>{
      console.log(error)
    })
  }
  projects:any;
  getprojectData(){
    this.service.getprojects().subscribe((Response)=>{
      this.projects = Response;
      console.log(this.projects);
    })
  }
  onclicklabel(){
 this.router.navigateByUrl('labels');
  }
  onclickcate(){
this.router.navigateByUrl('categories');
  }
}
