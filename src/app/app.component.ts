import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  z = 100;
  z1 = 100;
  z2 = 100;
  z3 = 100;
  z4 = 100;
  z5 = 100;

  addToZ(x: any, y: any) {
    return x + y + this.z;
  }

  addToW(x: any, y: any) {
    return x + y + this.z;
  }

  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
  // addToW(x: any, y: any) {
  //   return x + y + this.z;
  // }
}
