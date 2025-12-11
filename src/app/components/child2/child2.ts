import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  imports: [FormsModule],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  newName: string = '';

  constructor(public productService: Product) {}
}
