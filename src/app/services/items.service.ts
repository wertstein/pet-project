import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Item } from '../interfaces/item';

class CItem implements Item {
  constructor(
    public id: number,
    public name: string,
  ) {}
}

@Injectable()
export class ItemsService {
  constructor(private http: Http) {}

  getAlbums(): Observable<any[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/albums')
      .map(res => {
        return res
          .json()
          .map(item => {
            return new CItem(item.id, item.title);
          });
      });
  }
}
