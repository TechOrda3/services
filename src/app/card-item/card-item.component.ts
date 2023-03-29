import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import type {Product} from '../models/product';
import {ProductService} from '../product-service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
