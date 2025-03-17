import {Component} from '@angular/core';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';

@Component({
  selector: 'app-forms-page',
  imports: [
    TemplateDrivenComponent
  ],
  template: `
    <div class="flex flex-row">
      <div class="w-1/2 p-4">
        <app-template-driven/>
      </div>
      <div class="w-1/2 p-4">
        Reactive forms
      </div>
    </div>
  `,
  styles: ``
})
export class FormsPageComponent {

}
