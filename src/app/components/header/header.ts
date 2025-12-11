import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES_PATHS } from '../../core/models/routes';

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isDark: boolean = true;
  paths = ROUTES_PATHS;

  toggleTheme() {
    this.isDark = !this.isDark;
  }
}
