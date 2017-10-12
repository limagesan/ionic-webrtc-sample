import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class WebRTCProvider {
  stun: string = 'stun.l.google.com:19302';
  peer: PeerJs.Peer;
  mediaConnection: PeerJs.MediaConnection;
  myStream: MediaStream;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  stunServer: RTCIceServer = {
    urls: 'stun:' + this.stun,
  };
  options: PeerJs.PeerJSOption;

  constructor() {
    navigator.getUserMedia = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
      || navigator.msGetUserMedia;
    this.options = {
      key: 'cd1ft79ro8g833di',
      debug: 3
    }
  }

  getMedia(myEl: HTMLMediaElement) {
    navigator.getUserMedia({ audio: true, video: true }, (stream) => {
      this.myStream = stream;
      this.myEl = myEl;
      this.myEl.src = URL.createObjectURL(this.myStream);
    }, (error) => {
      console.error('[getMedia] cannot get user media');
    });
  }

  init(userId: string, myEl: HTMLMediaElement, partnerEl: HTMLMediaElement) {
    this.getMedia(myEl);
    this.createPeer(userId);
  }

  createPeer(userId: string) {
    this.peer = new Peer(userId, this.options);
    this.peer.on('open', () => {
      this.wait();
    });
  }

  call(partnerId: string) {
    this.mediaConnection = this.peer.call(partnerId, this.myStream);
  }

  wait() {
    this.peer.on('call', (call) => {
      call.on('stream', (stream) => {
        this.partnerEl.src = URL.createObjectURL(stream);
      });
    });
  }
}