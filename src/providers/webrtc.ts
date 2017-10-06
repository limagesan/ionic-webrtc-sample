import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class WebRTCProvider {
    stun: string = 'stun.l.google.com:19302';

    stunServer: RTCIceServer = {
        urls: 'stun:' + this.stun,
    };
    options: PeerJs.PeerJSOption;

    constructor() {
        navigator.getUserMedia = navigator.getUserMedia;
        this.options = {
            key: 'cd1ft79ro8g833di',
            debug: 3
        }
    }

    getMedia(myEl: HTMLMediaElement) {
        navigator.getUserMedia({ audio: true, video: true }, (stream) => {
            myEl.src = URL.createObjectURL(stream);
        }, (error) => {
            console.error('[getMedia] cannot get user media');
        });
    }

    createPeer(userName: string) {
        var peer = new Peer(userName, this.options);
    }
}