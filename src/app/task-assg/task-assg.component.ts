import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-task-assg',
  templateUrl: './task-assg.component.html',
  styleUrls: ['./task-assg.component.css']
})
export class TaskAssgComponent implements OnInit{
  constructor(private service: AppServiceService){}
  alert:boolean = false;
  data:any;
  starttime!: string;
  endtime!: string;
  @ViewChild('createtask')
  form!: NgForm;
task={
  taskurl: '',
  startdate:'',
  enddate:'',
  starttime:'',
  endtime:'',
  status:'',
  setPriority:'',
  projectId:''
};
selectuserid =[]
onsubmit(froms:NgForm){
console.log(froms)
}
  ngOnInit(): void {
    this.getuser();
    this.getProject();
  }
  getapifromtask(){
    this.service.getTaskData().subscribe((Response:any)=>{
      console.log('Response from API',Response)
    },(error)=>{
      console.log('Error is ',error);
    })
  }
posttask(data:any){
  this.service.postTaskData(data).subscribe((Response)=>{
    console.log('Data posted',Response);
    console.log(data);
    this.form.reset();
    this.alert = true;
  },(error)=>{
    console.log('Error is',error);
  })
}

tryinh(){
  this.data.find((item:any)=>{
   if( item.selectusers=== this.users.firstname ){
    return item.id
   }
   else{
    return 0;
   }
  })

}
postuseridandtaskid(data: any){
  this.service.posturidandtkid(data).subscribe((Response)=>{
    console.log('Data Posted',Response)
  },(error)=>{
    console.log('Error is',error);
  })
  console.warn(data);
}

// getassigneddata(){
//   this.service.fetchbyidone().subscribe((Response)=>{
//     console.log('Id from user',Response)
//   },(error)=>{
//     console.log('Error is',error);
//   })
//   this.service.fetchbyidtwo().subscribe((Response)=>{
//     console.log('Id from Tasks',Response)
//   },(error)=>{
//     console.log('Error is',error);
//   })
// }
users:any;
getuser(){
  this.service.getUserData().subscribe((data:any)=>{
    this.users=data;
  })
  }
projects:any
getProject(){
  this.service.getprojects().subscribe((Response)=>{
    this.projects = Response;
    console.log(this.projects)
  },(error)=>{
    console.log(error);
  })
}
closebtn(){
  this.alert=false;
}

}
