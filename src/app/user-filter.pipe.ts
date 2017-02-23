import {Pipe,PipeTransform} from "@angular/core";
import {OnInit} from '@angular/core'
import {IUser} from "./users";

@Pipe({
  name:'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform3(value: IUser[], filterBy: string): IUser[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((users: IUser) =>
      users.userId === parseInt(filterBy)) : value;
  }

  transform(value: IUser[], filterBy: string): IUser[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((users: IUser) =>
      users.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }



}

