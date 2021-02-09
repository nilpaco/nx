import { Component, Input } from '@angular/core';

@Component({
  selector: 'nuvolar-header',
  template: `
  <header class="flex">
    <img
      alt="Nx logo"
      width="75"
      src="https://nx.dev/assets/images/nx-logo-white.svg"
    />
    <h1>Welcome to {{ title }}!</h1>
  </header>
  `,
  styles: [
    `
    header {
      background-color: #143055;
      color: white;
      padding: 5px;
      border-radius: 3px;
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h1 {
      text-align: center;
      margin-left: 18px;
      font-size: 24px;
    }
    `
  ]
})
export class HeaderComponent {
  @Input() title = '';
}
