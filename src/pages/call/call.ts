import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'call-home',
    templateUrl: 'call.html'
})
export class CallPage {
    userName: string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.userName = this.navParams.get('userName');
    }
}
