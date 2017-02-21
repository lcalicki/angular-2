import {Injectable} from '@angular/core';
import {IUser} from './users';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()

export class UserService {
  private _productUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private  _http: Http) {
  }

  getUsers(): Observable<IUser[]> {
    return this._http.get(this._productUrl)
      .map((response:Response)=> <IUser[]>response.json())
  .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getUser (id: number): Observable<IUser> {
    return this.getUsers()
      .map((users: IUser[]) => users.find(p => p.userId === id));
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

