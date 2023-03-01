import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent,CalendarEventTimesChangedEvent} from 'angular-calendar';
import { endOfDay, getTime, parseISO, startOfDay } from 'date-fns';
import { TaskAssgComponent} from '../task-assg/task-assg.component';
import { AppServiceService } from '../app-service.service';
import { Subject } from 'rxjs';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
  providers: [TaskAssgComponent]
})
export class CalendarViewComponent  implements OnInit{
  events : CalendarEvent[] =  []
  ngOnInit(): void{
    this.gettasks();
   this.getuser();
   
  }
  modalData: { event: CalendarEvent<any>; action: string; } | undefined;
  modal: any;
  enable:boolean=false;
 
constructor( private service:AppServiceService, public task: TaskAssgComponent,private user:UserComponent){}


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
userId:any;
userdata:any;
taskdata:any;
currenttask:any;
currentDate = new Date();
getuser(){
  this.service.getUserData().subscribe((data:any)=>{
    this.userdata=data;
  })
}
handleclick(id:Number){
this.service.gettask(this.userId).subscribe((res:any)=>{
 this.currenttask = res;
 let tempArray = res.map((items:any)=>{
  let startdate = new Date(items.startdate+['T']+items.starttime)
  let enddate = new Date(items.enddate+['T']+items.endtime)
  this.startdate = startdate;
 return  {"start": startdate,"end":enddate,"title":items.taskurl, "color":{primary:'#add8e6',secondary:enddate < new Date() ? '#ffb6c1' : '#add8e6'}};
})
this.events =tempArray;

})
}

gettasks(){
  this.service.gettask(this.service.getid()).subscribe((data:any)=>{
    this.taskdata=data;
    let tempArray = data.map((items:any)=>{
      let startdate = new Date(items.startdate+['T']+items.starttime)
      let enddate = new Date(items.enddate+['T']+items.endtime)
      this.startdate = startdate;
      return  {"start": startdate,"end":enddate,"title":items.taskurl, "color":{primary:'#add8e6',secondary:enddate < new Date() ? '#ffb6c1' : '#add8e6'}};
    })
    this.events = tempArray;
    
     })
}
assign(){
  if (localStorage.getItem('Loggedinmanager')){
    return true;
     }
   else{
  return false;
 }
}
  
  startdate!: Date; 
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  isoverdue():boolean{
    return this.viewDate >this.startdate;
    } 
setView(view: CalendarView){
    this.view = view;
 }
temp: any= []

  refresh = new Subject<void>();
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  modalContent(modalContent: any, arg1: { size: string; }) {
    throw new Error('Method not implemented.');
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
  }
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }
delete(id:number){
  this.taskdata.splice(id-1,1);
this.service.deletetask(id).subscribe((Response)=>{
  console.warn(Response)
})
}
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
    
  }
  isvalid:boolean | undefined;
  alltask(){
   if(this.enable == true){
    return true;
   }
    else{
      return false
    }
   
  }
}



