import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Review } from './review/review';
@Component({
  selector: 'jup-product-review',
  template: `
    <div class="stars">
      <jup-review
        *ngFor="let star of stars"
        [active]="star <= _rating"
        (rate)="onRate($event)"
        [position]="star"
      >
      </jup-review>
    </div>
  `
})
export class ProductReviewComponent implements OnInit {

  @Input() starCount: number;
  @Input() rating: number;
  @Output() rate = new EventEmitter();
  stars:number[] = [1,2,3,4,5];
  _rating = this.rating;

  constructor() {
    const count = this.starCount < 0 ? 5 : this.starCount;
  }

  ngOnInit() {
  }

  onRate(star) {
    this.rate.emit(star);
    this._rating = star;
  }
}
