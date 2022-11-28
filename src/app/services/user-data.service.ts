import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService{

  userData: any;
  constructor(private http: HttpClient) {
     
   }
 

  getUserById(id: string) {
    console.log("User data"+this.userData);
    
    return this.userData.filter((user: User) => user.id == id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>('assets/users.json')
      .pipe(
        tap(users => this.userData = users),
        catchError(this.handleError<User[]>('Get student', []))
      );
  }
}

//https://www.mockaroo.com/