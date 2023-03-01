import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { AppServiceService } from '../app-service.service'
import { gantt } from 'dhtmlx-gantt';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  [x: string]: any;
  @ViewChild('ganttContainer', { static: true })
  ganttContainer!: ElementRef;
  constructor(private service:AppServiceService){}
  
  ngOnInit(): void {
    this.getProjects();
    this.getTask();
  }
  
  projectData:any
 getProjects(){
  this.service.getprojects().subscribe((Response)=>{
    this.projectData = Response;
  },(error)=>{
  console.log(error);
  })
 }
 taskData:any
 getTask(){
  this.service.getTaskData().subscribe((Response)=>{
    
   this.taskData = JSON.parse(JSON.stringify(Response));
   console.log(this.taskData)
   gantt.init(this['ganttContainer'].nativeElement);
   gantt.config.xml_date = '%y-%m-%d';
   gantt.parse({data: this.taskData});
  },(error)=>{
    console.log(error);
  })
 }
}
