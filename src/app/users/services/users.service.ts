import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../interfaces/item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

class User implements Item {
  id;
  name;

  constructor(user) {
    this.id = user.id;
    this.name = user.title;
  }
}

const API = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getOne(id: number): Observable<Object> {
    return this.http.get(`${API}/albums/${id}`);
  }

  getList(): Observable<Object> {
    return this.http.get(`${API}/albums`);
  }
}
