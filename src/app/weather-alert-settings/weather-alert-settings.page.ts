import { Component, OnInit  } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-weather-alert-settings',
  templateUrl: './weather-alert-settings.page.html',
  styleUrls: ['./weather-alert-settings.page.scss'],
})
export class WeatherAlertSettingsPage implements OnInit {

  settings = {};

  constructor(public storage: Storage) {}


  async ngOnInit() {
    await this.storage.create();
    this.settings = await this.storage.get('weatherAlertSettings') || {};
  }   

  async ionViewWillLeave() {
    await this.storage.set('weatherAlertSettings', this.settings);
  }
}
