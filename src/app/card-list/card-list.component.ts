import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../product-service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.products
  }

}
