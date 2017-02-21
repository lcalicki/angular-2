import { Component } from '@angular/core';
import {UserService} from "./user-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title:string = 'SECRET LIST';
  listtitle:string ='Taka sobie fajna lista';
}
