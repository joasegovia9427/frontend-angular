import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Person, Animal, Product } from '@models/index';

@Component({
  selector: 'app-recall-and-differences',
  imports: [FormsModule, CommonModule],
  templateUrl: './recall-and-differences.html',
  styleUrl: './recall-and-differences.css',
})
export class RecallAndDifferences {
  //DECORATORS
  @Input() message: string = '';
  @Input() text: string = '';
  @Input() otherUserMessage: string = '';
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() login: EventEmitter<Person> = new EventEmitter<Person>();

  //SINALS
  //if we put a input.required<type we are saying that the signal is required and the parent must provide it, otherwise Angular will throw an error
  // signalMsgFromParent = input.required<string>('initial text');
  signalMsgFromParent = input<string>('initial text');
  signalObject = input<Person>();
  signalLogged = output<Person>();

  userName: string;
  number: number = 0;
  condition: boolean = true; //false;
  condition2: string = 'foo'; // "";
  movies: string[] = [
    'The Matrix',
    'The Matrix Reloaded',
    'The Matrix Revolutions',
  ];
  animals: Animal[] = [
    {
      id: 1,
      name: 'Lion',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1200px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    },
    {
      id: 2,
      name: 'Tiger',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/1200px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg',
    },
    {
      id: 3,
      name: 'Bear',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0WXsKfxGE4gjbY_KJqSM8y2DLPDvSwPy8A&s',
    },
  ];
  product: Product;

  constructor() {
    this.userName = 'Joaquin simple text';
    this.product = {
      name: 'Laptop',
      price: 1000,
      isForSale: true,
    };
  }

  addOne() {
    this.number++;
  }

  handleLogin() {
    this.login.emit({
      name: 'Joaquin',
      age: 31,
      logged: true,
    });
  }

  handleLoginsSignal() {
    this.signalLogged.emit({
      name: 'Joaquin SIGNAL',
      age: 31,
      logged: true,
    });
  }
}
