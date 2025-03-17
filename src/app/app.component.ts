import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <nav>
      <ul>
        <li>
          <a
            routerLink="/forms"
            routerLinkActive="active"
            ariaCurrentWhenActive="page">Forms</a>
        </li>
      </ul>
    </nav>

    <!--
    <p-button label="Toggle Dark Mode" (onClick)="toggleDarkMode()"/>
    -->

    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-playground';

  /**
   * Dark mode toggle

   toggleDarkMode() {
   const element = document.querySelector('html');
   element?.classList.toggle('dark-mode');
   }
   */
}
