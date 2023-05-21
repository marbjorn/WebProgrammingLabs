import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PeriodicalItem } from '../periodical-item';
import { ITEMS } from '../mock-periodical-list';

@Injectable({
  providedIn: 'root'
})
export class PeriodicalService {
  getItems() : Observable<PeriodicalItem[]> {
    const items = of(ITEMS);
    return items;
  }

  getItem(id : number) : Observable<PeriodicalItem> {
    const item = ITEMS.find(i => i.id === id)!;
    return of(item);
  }
}
