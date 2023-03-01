import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }
  getuserbyid(id:number){
    return this.http.get(`/api/userbyid/${id}`);
  }
  getUserData(){
    return this.http.get('/api/getUserdata');
  }
  postUserData(data :any){
    return this.http.post(` http://localhost:3000/postUserData`,data);

  }
  getLoginData(){
    return this.http.get('/api/userLogin');
  }
  postLoginData(data :any){
    return this.http.post(`http://localhost:3000/postLogin`,data);
  }

  postTaskData(data:any){
    return this.http.post(`http://localhost:3000/postTaskData`,data);

  }
  postTaskData3(data:any,ids:any){
    return this.http.post(`http://localhost:3000/usertaskudmultiplepost`,data,ids);

  }
  getTaskData(){
    return this.http.get('/api/allTasks');
 }
 deletetask(id:number){
  return this.http.delete(`http://localhost:3000/deletetasks/${id}`);
  
 }
 getCurrentproject(id:number){
 return this.http.get(`/api/projectbyid/${id}`);
 }
 getcurrenttask(id:number){
  return this.http.get(`http://localhost:3000/getbyid/${id}`);
 }
 gettask(id:number){
  return this.http.get(`http://localhost:3000/getusertask/${id}`);
 }
 getProjectTask(id:number){
 return this.http.get(`http://localhost:3000/projectTask/${id}`);
 }
 gettaskidanduserid(){
  return this.http.get('/api/usertask');
 }
 getprojects(){
  return this.http.get(`/api/allProjects`)
 }

 posturidandtkid(data:any){
  return this.http.post(`http://localhost:3000/postUserTask`,data);
 }                            
 fetchbyidone(){
    return this.http.get('/api/fetchbyid1');
 }
 fetchbyidtwo(){
    return this.http.get('/api/fetchbyid2');
 }
 fetchlabels(){
 return this.http.get('/api/alllabels');
 }
 fetchcategories(){
  return this.http.get('/api/allcategories');
 }
 puttaskdata(id:number,data:any){
  return this.http.put(`http://localhost:3000/EditTask/${id}`,data);
 }
 putproject(id:number,data:any){
  return this.http.put(`http://localhost:3000/editproject/${id}`,data);
 }
 postlabel(data:any){
  return this.http.post(`http://localhost:3000/addLabels`,data);
 }
 postcategories(data:any){
  return this.http.post(`http://localhost:3000/addCategories`,data);
 }
 postprojects(data:any){
  return this.http.post(`http://localhost:3000/addProjects`,data);
 }
 postId(data:any){
return this.http.post(`http://localhost:3000/addProjectId`,data,);
 }
 getuserproject(id: number){
  return this.http.get(`/api/getuserProject/getuserProject/${id}`)
 }
 loggedin:boolean = false;
 islogin()
 {
   this.loggedin = true;
 }
 islogout(){
   this.loggedin = false;
 }
Isauthenticate(){
  return this.loggedin;
}
role:boolean = false;
isnotDevelop()
{
  this.role = true;
}
isdeveloper(){
  this.role = false;
}
checkrole(){
 return this.role;
}
ids:any
setid(id:Number){
  this.ids=id
}
getid(){
  return this.ids;
}
}
 