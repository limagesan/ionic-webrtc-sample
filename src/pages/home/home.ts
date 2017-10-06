import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallPage } from '../call/call';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userId: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(CallPage, { userName: this.userId });
  }
}
