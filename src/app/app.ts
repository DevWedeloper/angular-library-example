import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButton } from 'ui-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-library-example');
}
