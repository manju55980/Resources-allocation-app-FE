import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service'
import { ActivatedRoute ,Router } from '@angular/router'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit{
  constructor(private service:AppServiceService,private router:Router, private activeroute: ActivatedRoute){}
  ngOnInit(): void {
    this.getlabel();
    this.getcategories();
    this.getusers();
     this.projectId = this.activeroute.snapshot.params['id'];
    this.service.getCurrentproject(this.activeroute.snapshot.params['id']).subscribe((data:any)=>{
console.log(data)
data.map((item:any)=>{
  this.Form.setValue({
    name:item.name,
    desc:item.desc,
    labelId:item.labelId,
    categoryId:item.categoryId,
    status:item.status,
  })
  console.log(this.Form)
})
    })
    
  }
  submitForms(){
    this.Form.ngSubmit.emit();
    this.formtwo.ngSubmit.emit();
  }
  @ViewChild ('projectedit')
  Form!:NgForm 
   @ViewChild('multi')
   formtwo!:NgForm
labels:any
categories:any
editProject(data:any){
this.service.putproject(this.activeroute.snapshot.params['id'],data).subscribe((Response)=>{
  console.log('Data edited',Response);
  this.router.navigateByUrl('projectDisplay');
},(error)=>{
  console.log(error);
})
}

getlabel(){
  this.service.fetchlabels().subscribe((Response)=>{
this.labels = Response;
  })
}
getcategories(){
  this.service.fetchcategories().subscribe((Response)=>{
    this.categories = Response;
  })
}

user:any;
getusers(){
  this.service.getUserData().subscribe((Response)=>{
    this.user = Response;
  })
}
 projectId:any
 postusers(data:any,){
 data.projectId = this.projectId;
 this.service.postId(data).subscribe((data:any)=>{
   console.log(data)
 },(error)=>{
     console.log(error);
   })
   }
}
