import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service';
import { Item } from '../../interfaces/item';

import { Observable } from 'rxjs';

@Component({
  selector: 'pp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.getAlbums();
  }
}
