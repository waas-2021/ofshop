import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myLocalStorage = window.localStorage;
  
  constructor(private router: Router) { }
  
  title = 'ofshop';

  setData(identifier: string, value: any) {
    console.log("setData");
    this.myLocalStorage.setItem(identifier, JSON.stringify(value));
  }

  editData(identifier: string, value: any) {
    console.log("getData");
    this.myLocalStorage.setItem(identifier, JSON.stringify(value));
  }

  getData(identifier: string) {
    console.log("getData");
    const data = this.myLocalStorage.getItem(identifier);
    console.log(data);
    return data;
  }

  removeData(identifier: string){
    console.log("removeData");
    this.myLocalStorage.removeItem(identifier);
  }

  loggedIn(){
    return localStorage.getItem('token');
  }

  logout(){
    alert("Logged out");
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
