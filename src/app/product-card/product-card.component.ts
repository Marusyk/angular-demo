import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products: Object[];
  max: number;
  counter: number = 0;

  constructor() { }

  ngOnInit() {
    this.products = [
      {name: "HP1", description: "Some descriptions1", url: "http://simpleicon.com/wp-content/uploads/rocket.png"},
      {name: "HP2", description: "Some descriptions2", url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc8rs-ZwiiGKAoXWtyCBZfc3bErIOGkCjz_2xwfXAaQRDQS7FW"},
      {name: "HP3", description: "Some descriptions3", url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfo3zxDibxhLbQsnXnOmm_RgBjkchPIF3gyGZzyQLRhWv1X7c1"},
      {name: "HP4", description: "Some descriptions4", url: "http://freeflaticons.com/wp-content/uploads/2014/09/rocket-copy-14115574298nk4g.png"}
    ]
    this.max = this.products.length - 1;
  }

  next() {
    if(this.counter < this.max) {
      this.counter++;
    }
  }

  previous() {
    if(this.counter > 0) {
      this.counter--;
    }
  }
}
