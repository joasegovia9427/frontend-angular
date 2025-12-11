import { Injectable } from '@angular/core';
import { Product as ProductModel } from '@models/Product';

@Injectable({
  providedIn: 'root',
})
export class Product {
  name: string = 'test';

  product: ProductModel;

  constructor() {
    this.product = {
      name: 'example',
      price: 0,
      isForSale: false,
    };
  }

  setProductName(name: string): void {
    this.product.name = name;
  }
}
