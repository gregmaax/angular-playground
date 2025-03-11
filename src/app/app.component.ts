import {TuiButton, TuiRoot} from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton],
  template: `
    <tui-root>
      <h1>Welcome to {{title}}!</h1>
      <h1 class="text-3xl text-blue-700 font-bold underline">
        Hello world!
      </h1>

      <button
        size="s"
        tuiButton
        type="button"
      >
        Tester
      </button>

      <router-outlet />
    </tui-root>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-playground';
}
