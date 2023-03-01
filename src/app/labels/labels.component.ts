import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent {
  constructor(private service:AppServiceService ,private route:Router){}
postlabel(data:any){
  this.service.postlabel(data).subscribe((Response)=>{
    console.log('Data Posted',Response)
    this.route.navigateByUrl('projects')
 },(error)=>{
    console.log('error is',error);
  }
  )
}
}
