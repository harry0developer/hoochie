import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/oldUser';
import { Observable, tap, catchError, of } from 'rxjs';
// import { ALL } from '../utils/const';

@Injectable({
  providedIn: 'root'
})
export class UserDataService{

  userData: any;
  constructor(private http: HttpClient) {}
 

  getUserById(id: any) {
    const data = JSON.parse(localStorage.getItem('ALL') || '{}') ;    
    return data.filter((user: User) => user.id == id)[0];
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