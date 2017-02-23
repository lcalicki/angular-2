import {Component, OnInit} from "@angular/core";
import {UserService} from "./user-service";
import {IUser} from "./users";



@Component({
  moduleId:'module.id',
  selector:'ls-app',
  templateUrl:'list-component.html',
  styleUrls:['./list-component.css']

})

export class ListComponent implements OnInit{
  errorMessage: string;

  constructor(private _userService: UserService){

  }

  listtitle:string='Moja Lista';
  listfilter:string='';


  users: IUser[];

  ngOnInit(): void {
    this._userService.getUsers()
            .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }
selectedUser: IUser;
  user:IUser;

  onSelect(user:IUser):void {
    this.selectedUser=user;
    this.selectedUser.id=user.id;
  }

}

/**
 * Created by lukasz on 2/20/17.
 */
