import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Movie } from '@models/Movie';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  // movieForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   duration: new FormControl(''),
  //   director: new FormControl(''),
  // });

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(5),
    ]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    });
  }

  handleSubmit() {
    alert(this.movieForm.value.name);
    this.movieForm.reset();
  }
}
