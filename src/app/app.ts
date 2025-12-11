import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';
import { RecallAndDifferences } from './components/recall-and-differences/recall-and-differences';
import { Person } from '@models/Person';
import { ReactiveForms } from './components/reactive-forms/reactive-forms';
import { Country } from './components/country/country';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    FormsModule,
    CommonModule,
    RecallAndDifferences,
    ReactiveForms,
    Country,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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
