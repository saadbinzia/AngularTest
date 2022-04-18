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
  z5 = 100;

  // addToA(x: any, y: any) {
  //   return x + y + this.z;
  // }

  addToB(x: any, y: any) {
    return x + y + this.z;
  }

  addToC(x: any, y: any) {
    return x + y + this.z;
  }
  addToD(x: any, y: any) {
    return x + y + this.z;
  }
  addToE(x: any, y: any) {
    return x + y + this.z;
  }
  addToF(x: any, y: any) {
    return x + y + this.z;
  }
  addToG(x: any, y: any) {
    return x + y + this.z;
  }
  addToH(x: any, y: any) {
    return x + y + this.z;
  }
  addToI(x: any, y: any) {
    return x + y + this.z;
  }
}
