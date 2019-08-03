import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppSettings} from "../../../models/appSettings"  
import { User } from '../../../models/user';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthoriseService {

  constructor(private http: HttpClient) { }

  public loggedInStatus = localStorage.getItem("loggedIn")==="true"? true : false;
  public header = new HttpHeaders({'Content-Type' : 'application/json; charset=utf-8'});

  public isLoggedIn(): boolean
  {
    return this.loggedInStatus;
  }

  authoriseUser(userName: string, password: string): Observable<User>  
  {
    debugger;
    var pass : User = new User();
    pass.UserName = userName;
    pass.Password = password;
    return this.http.post<User>(AppSettings.API_URL+AppSettings.LOGIN,pass,
    {headers: this.header});
  }

  private handleError<T> (operation = "operation",  result?: T)
  {
   return (error: any): Observable<T> => {
     console.log(error);
     return of(result as T);
    }
  }
}
