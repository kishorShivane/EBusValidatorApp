import { Component, PipeTransform, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SmartCard } from '../../../models/smart-card';
import { SmartCardService } from '../smart-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  smartCardList$: Observable<SmartCard[]>;
  smartCardList: SmartCard[];
  filter = new FormControl('');

  constructor(private pipe: DecimalPipe, private service: SmartCardService, private router: Router) {
  }

  ngOnInit() {
    this.service.GetAllSmartCard().subscribe(data => {
      debugger;
      if (data) {
        this.smartCardList = data;
        this.smartCardList$ = this.filter.valueChanges.pipe(
          startWith(''),
          map(text => this.search(text, this.pipe))
        );
      }
    })
  }

  search(text: string, pipe: PipeTransform): SmartCard[] {
    debugger;
    return this.smartCardList.filter(smartCard => {
      const term = text.toLowerCase();
      return smartCard.SmartcardNumber.toLowerCase().includes(term)
        || smartCard.Name.toLowerCase().includes(term)
        || smartCard.EMail.toLowerCase().includes(term)
        || smartCard.CardType.toLowerCase().includes(term);
    });
  }

  navigateToUpdate(id) {
    this.router.navigate(["/smartcard/register/" + id]);
  }

}
