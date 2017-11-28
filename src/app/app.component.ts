import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tiles = [
    {text: 'One', cols: 2, rows: 6},
    {text: 'Two', cols: 2, rows: 6},
    {text: 'Three', cols: 2, rows: 6}
  ];
}
