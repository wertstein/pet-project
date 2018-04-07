import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';
import { Item } from './../../../interfaces/item';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'pp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Item[];
  users$: Observable<Object>;

  columnsToDisplay = ['id', 'name'];

  selectedId: number;

  constructor(private service: UsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.users$ = this.route.paramMap
    .switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');

      return this.service.getList();
    });
  }
}
