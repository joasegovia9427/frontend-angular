import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecallAndDifferences } from '../recall-and-differences/recall-and-differences';
import { Person } from '@models/Person';
import { ReactiveForms } from '../reactive-forms/reactive-forms';
import { Country } from '../country/country';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CommonModule,
    RecallAndDifferences,
    ReactiveForms,
    Country,
    Child1,
    Child2,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = signal('frontend-angular');

  outPutMessage: string = '';
  messageFromChild: string = '';
  person: Person = {
    name: 'Joaquin',
    age: 31,
  };

  onMessageEvent(event: string) {
    this.messageFromChild = event;
  }

  parentHandleLogin(event: Person) {
    alert(event.name);
  }
}
