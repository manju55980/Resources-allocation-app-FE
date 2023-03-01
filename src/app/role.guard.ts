import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { UserComponent } from './user/user.component';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:AppServiceService,private user:UserComponent ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('Loggedinmanager')){
        return true;
         }
       else{
      return false;
     }
  }
  dynamicRole!: []; 
  auth(){
    
  }
  private rolebasedAuth(route:ActivatedRouteSnapshot):boolean
  {
    // this.service.getuserbyid(this.user.id).subscribe((Response:any)=>{
    //   this.dynamicRole = Response.map((a:any)=>{
    //    return a.role;
    //   })
    // })
    const roles = ['Manager'];
    const expectedRoles = route.data['expectedRoles'];
    const RoleMatch = roles.findIndex((role: any) => expectedRoles.indexOf(role)!==-1);
    return (RoleMatch < 0) ? false : true;
  }
}
// validation(){

//   this.dynamicRole = Response.map((a:any)=>{
//   let gata = a.role;
//   console.log(gata);
//  })}