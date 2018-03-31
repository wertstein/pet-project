import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { Item } from './../interfaces/item';

import { Observable } from 'rxjs';

@Component({
  selector: 'pp-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private itemsService: UsersService) {}

  ngOnInit() {
    this.items = this.itemsService.getAlbums();
  }
}
