import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res) => res)
      );
  }
}
