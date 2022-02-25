import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router, NavigationEnd } from "@angular/router";
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.page.html',
  styleUrls: ['./shelters.page.scss'],
})
export class SheltersPage implements OnInit {
  subscription: Subscription;
  options: InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Back', //iOS only
    closebuttoncolor: '#FFFFFF',
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    toolbarposition: 'top', //iOS only
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'fullscreen',//iOS only 
    fullscreen : 'yes',//Windows only    
    hidenavigationbuttons: 'yes',
    hideurlbar: 'yes',
    toolbarcolor: '#061e3d',
    lefttoright: (this.platform.is('ios')) ? 'no' : 'yes'
  };

  constructor(private iab: InAppBrowser, private router: Router, private platform: Platform) { }

  ngOnInit() {
    const browser = this.iab.create('https://www.msema.org/shelters-and-safe-rooms/', '_blank', this.options);

    browser.on('exit').subscribe(event => {
      this.router.navigate(["/tabs/"])
    });
  }
}

