import { Component, OnInit } from '@angular/core';
import { PeriodicalItem } from '../periodical-item';
import { PeriodicalService } from '../services/periodical.service';

@Component({
  selector: 'app-periodical-list',
  templateUrl: './periodical-list.component.html',
  styleUrls: ['./periodical-list.component.css']
})
export class PeriodicalListComponent implements OnInit {
  items : PeriodicalItem[] = [];
  constructor (private periodicalService : PeriodicalService) { }
  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.periodicalService.getItems()
    .subscribe(items => this.items = items);
  }
}
