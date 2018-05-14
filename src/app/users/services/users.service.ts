import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../interfaces/item';
import { Observable } from 'rxjs';


export class User implements Item {
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

  // TODO: handle any
  getOne(id: number): Observable<any> {
    return this.http.get(`${API}/albums/${id}`);
  }

  // TODO: handle any
  getList(): Observable<any> {
    return this.http.get(`${API}/albums`);
  }
}
