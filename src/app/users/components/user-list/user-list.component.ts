import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Item } from './../../../interfaces/item';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');

        return this.service.getList();
      })
    );
  }
}
