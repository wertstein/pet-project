import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'pp-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService
  ) {}

  ngOnInit() {
    this.user$ = this.route.paramMap.switchMap((params: ParamMap) =>
      this.service.getOne(+params.get('id'))
    );
  }
}
