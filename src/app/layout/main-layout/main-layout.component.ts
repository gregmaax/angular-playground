import {Component} from '@angular/core';
import {Toolbar} from 'primeng/toolbar';
import {RouterOutlet} from '@angular/router';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-main-layout',
  imports: [
    Toolbar,
    RouterOutlet,
    Button
  ],
  template: `
    <div class="shadow-lg">
      <p-toolbar [style]="{'border': 'none'}">
        <ng-template #start>
          Angular
        </ng-template>
        <ng-template #center>
          Playground
        </ng-template>
        <ng-template #end>
          <p-button size="small" icon="pi pi-moon" [text]="true" (onClick)="toggleDarkMode()"/>
        </ng-template>
      </p-toolbar>
    </div>


    <main class="container mx-auto mt-16 p-10">
      <router-outlet/>
    </main>

    <footer class="mt-auto p-10">
      <div class="container mx-auto text-center">
        Made to LEARN
      </div>
    </footer>
  `,
  styles: ``
})
export class MainLayoutComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark-mode');
  }
}
