import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class WebRTCProvider {

    constructor() {
        navigator.getUserMedia = navigator.getUserMedia;

    }

    getMedia(myEl) {
        navigator.getUserMedia({ audio: true, video: true }, (stream) => {
            myEl.src = URL.createObjectURL(stream);
        }, (error) => {
            console.error('[getMedia] cannot get user media');
        });
    }
}