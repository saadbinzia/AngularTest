import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  z = 100;

  addToZ(x: any, y: any) {
    return x + y + this.z;
  }

  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }

}
