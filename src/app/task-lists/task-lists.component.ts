import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { FormGroup ,FormControl, NgForm} from '@angular/forms'
import { ActivatedRoute ,Router} from '@angular/router'
@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit{
  alert:boolean = false;

constructor(private service: AppServiceService, private router:ActivatedRoute,private route:Router){}
 

ngOnInit(): void {
  this.getuser();
  this.getproject();
    console.warn(this.router.snapshot.params['id'])
    this.service.getcurrenttask(this.router.snapshot.params['id']).subscribe(( data:any)=>{
     console.warn(data)
     data.map((item:any)=>{
     this.form.setValue({
      taskurl:item.taskurl,
      startdate:item.startdate,
      enddate:item.enddate,
      starttime:item.starttime,
      endtime:item.endtime,
      status:item.status,
      setPriority:item.setPriority,
      userTableId:item.userTableId,
      projectId:item.projectId
     })
     console.log(this.form)
    })
  })
  }
  @ViewChild('edit')
  form!: NgForm;
  reset:boolean = false;
users:any;
// tasks:any;
starttime!:string;
endtime!:string;
project:any;
getuser(){
  this.service.getUserData().subscribe((data:any)=>{
    this.users=data;
  });
}
// gettasks(){
//   this.service.getTaskData().subscribe((data:any)=>{
//     this.tasks=data;
//      })
//     }
 getproject(){
    this.service.getprojects().subscribe((Response)=>{
        this.project = Response;
    },(error)=>{
        console.log(error);
    })
   }
puttask(data:any){
  this.service.puttaskdata(this.router.snapshot.params['id'],data).subscribe((Response)=>{
    console.log("Data Edited",Response)
      this.reset = true;    
      this.route.navigateByUrl('calendarview')                   
     },(error)=>{
      console.log(error);
     }
     )
}
 
closebtn(){
  this.alert=false;
}
}
