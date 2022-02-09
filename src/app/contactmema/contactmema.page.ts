import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contactmema',
  templateUrl: './contactmema.page.html',
  styleUrls: ['./contactmema.page.scss'],
})
export class ContactmemaPage implements OnInit {

  constructor(private iab: InAppBrowser, private router: Router) { }

  ngOnInit() {
    const browser = this.iab.create('https://www.msema.org/contact/', '_self', options);

    browser.on('exit').subscribe(event => {
      this.router.navigate(["/tabs/"])
    });
  }
}

const options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
    hidenavigationbuttons: 'yes',
    hideurlbar: 'yes',
    toolbarcolor: '#061e3d'
};