import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  constructor() { }
  public hasRole(role:string){
  const totalModules = Number(localStorage.getItem('number_of_modules')) + 1;
  let roles:any=[]
  for (let i = 0; i <= totalModules; i++) {
     roles[i] = localStorage.getItem("role_" + i);
     
  }
if(roles.includes(role)){
  return true
}
else{
  return false;
}
}




}
