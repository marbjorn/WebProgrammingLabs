import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeriodicalItem } from '../periodical-item';
import { PeriodicalService } from '../services/periodical.service';

@Component({
  selector: 'app-periodical-details',
  templateUrl: './periodical-details.component.html',
  styleUrls: ['./periodical-details.component.css']
})
export class PeriodicalDetailsComponent implements OnInit {
  item : PeriodicalItem | undefined;
  constructor(
    private route: ActivatedRoute,
    private periodicalService: PeriodicalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.periodicalService.getItem(id)
      .subscribe(hero => this.item = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
