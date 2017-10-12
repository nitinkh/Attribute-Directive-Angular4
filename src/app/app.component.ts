import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>My First directive</h1>
  <p [myHighlight] = "'red'">This is directive text</p>
  <div [ngSwitch] = "a">
  <p *ngSwitchCase = "'nitin'">Matched with case</p>
  <p *ngSwitchDefault>Matched with default</p>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a = 'xyz';
}
