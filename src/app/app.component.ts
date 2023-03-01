import { Component } from '@angular/core';
import {AppServiceService} from '../app/app-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-frontend';
  constructor (private service:AppServiceService,private route:Router){}
  display!: boolean;
    assign(){
      if (localStorage.getItem('Loggedinmanager')){
        return true;
         }
       else{
      return false;
     }
    }
    assignyro(){
      if (localStorage.getItem('Loggedinuser')){
        return true;
         }
       else{
      return false;
     }
    }
  
  logout(){
    this.route.navigateByUrl('user');
    localStorage.removeItem('Loggedinuser');
    localStorage.removeItem('Loggedinmanager');
    this.service.islogout();
    this.service.isdeveloper();
    }
}
