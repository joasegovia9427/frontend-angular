import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';
import { RecallAndDifferences } from './components/recall-and-differences/recall-and-differences';

export interface Person {
  name: string;
  age: number;
  logged?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    FormsModule,
    CommonModule,
    RecallAndDifferences,
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
