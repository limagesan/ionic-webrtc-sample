import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebRTCProvider } from '../../providers/webrtc';

@Component({
    selector: 'call-home',
    templateUrl: 'call.html'
})
export class CallPage {
    userName: string;
    myEl: HTMLMediaElement;
    partnerEl: HTMLMediaElement;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public webRTC: WebRTCProvider,
        public elRef: ElementRef
    ) {
        this.userName = this.navParams.get('userName');
    }

    ionViewDidLoad() {
        this.myEl = this.elRef.nativeElement.querySelector('#my-video');
        this.getMedia();
    }

    getMedia() {
        this.webRTC.getMedia(this.myEl);
    }
}
