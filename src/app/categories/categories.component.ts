import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private service:AppServiceService,private route:Router){}
  postcategories(data:any){
  this.service.postcategories(data).subscribe((Response)=>{
    console.log('DataPosted',Response)
    this.route.navigateByUrl('projects')
  },(error)=>{
    console.log('Error is',error);
  })
  }
}
