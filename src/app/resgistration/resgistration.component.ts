import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {Router} from '@angular/router'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css']
})
export class ResgistrationComponent implements OnInit{

  constructor(private service:AppServiceService, private  route: Router){}
  alert: Boolean= false;

@ViewChild('Regispost')
regisForm!: NgForm
ngOnInit(): void {
  this.getdatafromapi();
}
dnmaicdate:any
getdatafromapi(){
  this.service.getUserData().subscribe((Response:any)=>{
    console.log('Response from Api is',Response)
    },(error)=>{
    console.log('Error is',error);
  })

}

onClick(from:NgForm){
console.log(from)
}
postdata(data:any){
  this.service.postUserData(data).subscribe((Response)=>{
    console.log('Data posted',Response)
    this.alert=true;
    this.route.navigateByUrl('user');
 },(error)=>{
  console.log('Error is',error);
 })
  
}
  closebtn(){
    this.alert=false;
  }
}

 
