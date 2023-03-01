import { Component, OnInit } from '@angular/core';
import { AppServiceService} from '../app-service.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup } from '@angular/forms'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  loginForm!: FormGroup;
  tkid:any
  constructor(private service:AppServiceService,private route:Router, private  formbuild: FormBuilder){}
  alert:boolean = false;
  ngOnInit(): void {
    this.loginForm = this.formbuild.group({
      email: [''],
      password: ['']
    })
  }

//   getdatafromapi(){
//     this.service.getLoginData().subscribe((Response)=>{
//       console.log('Response from Api is',Response)
//     },(error)=>{
//       console.log('Error is',error);
//     })
//   }
// postuser(data:any){
//   this.service.postLoginData(data).subscribe((Response)=>{
//     console.log('Data posted ',Response)
   
//   },(error)=>{
//     console.log('Error is',error);
//     this.route.navigateByUrl('calendarview');
//   });
//   this.alert=true;
// }
closebtn(){
  this.alert=false;
}
 login(){
   this.service.getUserData().subscribe((Response:any)=>{
     const user = Response.find ((a:any)=>{
       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
     })
     if(user==null){ 
    alert('Invalid Username or password')
     }
     else if (user.role =="Developer"){
       localStorage.setItem('Loggedinuser',this.loginForm.value.email)
       this.loginForm.reset();
       this.route.navigateByUrl('dashboard');
       this.service.islogin();
       this.tkid = user.id;
       this.service.setid(this.tkid) 
       this.service.isdeveloper();
     }
      else if(user.role == "Manager"){
        localStorage.setItem('Loggedinmanager',this.loginForm.value.email)
        localStorage.setItem('Loggedinuser',this.loginForm.value.email)
        this.loginForm.reset();
        this.route.navigateByUrl('dashboard');
        this.service.islogin();
        this.tkid = user.id;
        this.service.setid(this.tkid) 
        this.service.isnotDevelop();
       }
     else{
       alert("Login Failed");
       this.service.islogout();
     }
   },error=>{
     alert("Unable to Login");
   })
   
 }

}
