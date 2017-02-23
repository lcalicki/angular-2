import {Component} from "@angular/core";
import {IUser} from './users';

@Component({
  templateUrl: './user-detail.component.html'
})

export class UserDetailComponent {

  title:string = 'User Detail';
  users: IUser;
}
