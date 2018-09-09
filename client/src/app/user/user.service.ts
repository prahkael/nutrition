// *****************************************************************************
// Imports
// *****************************************************************************

import { Injectable }           from '@angular/core';
import { Inject }               from '@angular/core';
import { HttpClient }           from '@angular/common/http';

// *****************************************************************************

import { iUser }                from './user';
import { User }                 from './user';

// *****************************************************************************

import { of, Observable }       from 'rxjs';
import { map }                  from 'rxjs/operators';

// *****************************************************************************

import { LoginResult }          from './user';

// *****************************************************************************
// Service
// *****************************************************************************

@Injectable()
export class UserService {
  
  // *****************************************************************************
  
  constructor(
    private _http: HttpClient,
    @Inject('apiUser') private _apiUser
  ) { }
  
  // *****************************************************************************
  
  getAllUsers(): Observable<User[]> {
    return this._http.get(this._apiUser).pipe(map((users: User[]) => users));
  }
  
  // *****************************************************************************
  
  getUserById(id: string): Observable<User> {
    return this._http.get(`${this._apiUser}/${id}`).pipe(map((user: User) => user));
  }
  
  // *****************************************************************************
  
  createUser(user: iUser): Observable<User> {
    return this._http.post(this._apiUser, user).pipe(map((user: User) => user));
  }
  
  // *****************************************************************************
  
  deleteUser(userId: string) {
    return this._http.delete(`${this._apiUser}/${userId}`);
  }
  
  // *****************************************************************************
  
  updateUser(user: iUser, userId: string) {
    return this._http.put(`${this._apiUser}/${userId}`, user);
  }
  
  // *****************************************************************************
  
  login(username: string, password: string): Observable<LoginResult> {
    return this._http.get(`${this._apiUser}?username=${username}&password=${password}`)
      .pipe(map((users: Array<User>) => {
        console.log(users);
        if (users.length && users.length === 1) {
          const user: User = users[0];
          return {
            success: true,
            id: user.id
          };
        }
        return {
          success: false,
          id: ''
        };
    }));
  }
  
  // *****************************************************************************
  
  hasAuth(): Observable<boolean> {
    const userId = localStorage.getItem('userId');
    
    if (userId) {
      return this.getUserById(userId).pipe(map(user => !!user));
    }
    
    return of(false);
  }
  
  // *****************************************************************************
  
  getAuthUserId() {
    return localStorage.getItem('userId');
  }
  
  // *****************************************************************************
}

// *****************************************************************************