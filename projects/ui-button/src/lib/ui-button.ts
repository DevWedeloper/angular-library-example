import { Component } from '@angular/core';

@Component({
  selector: 'lib-ui-button',
  template: `
    <button class="ui-btn" (click)="onClick()">Click Me!</button>
  `,
  styles: [`
    .ui-btn {
      background-color: #3f51b5;
      color: #fff;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .ui-btn:hover {
      background-color: #303f9f;
    }

    .ui-btn:active {
      transform: scale(0.97);
    }

    .ui-btn:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.3);
    }
  `],
})
export class UiButton {
  protected onClick(): void {
    console.log('clicked');
  }
}
