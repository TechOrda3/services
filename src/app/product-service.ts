import {Injectable} from '@angular/core';
import {Product} from './models/product';
import {Subject} from 'rxjs';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Test 1'
    },
    {
      id: 2,
      name: 'Test 2'
    }
  ];
  private favs: Product[] = [];
  private favouritesSubject = new Subject<Product[]>();
  favourites = this.favouritesSubject.asObservable();

  constructor(
    private loggerService: LoggerService
  ) {}

  addFavourites(product: Product): void {
    this.favs.push(product);
    this.favouritesSubject.next(this.favs)
  }
}


