import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-to-projects',
  templateUrl: './add-to-projects.component.html',
  styleUrls: ['./add-to-projects.component.css']
})
export class AddToProjectsComponent implements OnInit{
  constructor(private service:AppServiceService,private router:Router){}
  @ViewChild('multi')
  form!:NgForm
  ngOnInit(): void {
    this.getusers();
  };
  user:any;
getusers(){
  this.service.getUserData().subscribe((Response)=>{
    this.user = Response;
  })
}
postusers(data:any){
console.log(this.form)
}
}
