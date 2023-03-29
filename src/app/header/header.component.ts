import {Component, OnInit} from '@angular/core';
import type {Observable} from 'rxjs';
import {ProductService} from '../product-service';
import {map, tap} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count!: Observable<number>

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // this.productService.favourites.subscribe(res => {
    //   this.count = res.length;
    // }, err => {})
    this.count = this.productService.favourites.pipe(
      tap((val) => console.log(val)),
      map(favs => favs.length),
      tap((val) => console.log(val)),
    )
  }

}

/** [{}], [{}, {}], 3, 4, 5
 * ---------------------------------------------------------=======
 */
