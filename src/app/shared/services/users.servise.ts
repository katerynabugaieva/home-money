import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {
    constructor(private http: Http) {

    }
    getUserByEmail(email: string): Observable<User> {
        return this.http.get("http://localhost:3000/users?email=${email}")
       // .map((response: Response) => response.json())
    }
}
