import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isDark: boolean = true;

  toggleTheme() {
    this.isDark = !this.isDark;
  }
}
