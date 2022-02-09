import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions  } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
options: InAppBrowserOptions = {
  location: 'no',
  toolbarposition: 'top'
}
  constructor(private iab: InAppBrowser,) {}
  ngOnInit() {

  }

  public openBlank(url : string) {
let target = "_blank";
this.iab.create(url,target,this.options)
    this.iab.create(url, target, this.options);
  }
}

