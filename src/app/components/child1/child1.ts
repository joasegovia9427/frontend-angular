import { Component } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
})
export class Child1 {
  constructor(public productService: Product) {}
}
