import {Component} from '@angular/core';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [
    MainLayoutComponent
  ],
  template: `
    <app-main-layout/>`,
  styles: [],
})
export class AppComponent {
  title = 'angular-playground';
}
