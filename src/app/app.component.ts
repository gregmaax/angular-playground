import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  template: `
    <tui-root>
      <h1>Welcome to {{title}}!</h1>

      <h1 class="text-3xl text-re font-bold underline">
        Hello world!
      </h1>

      <router-outlet />
    </tui-root>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-playground';
}
