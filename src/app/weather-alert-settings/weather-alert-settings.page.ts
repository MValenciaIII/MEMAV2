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
    let settings = await this.storage.get('weatherAlertSettings');
    let formattedSettings = {};
    Object.entries(settings).forEach(([key, value]) => {
      let formattedKey = key.replace(/ /g, '_');
      formattedSettings[formattedKey] = value;
    });
    this.settings = formattedSettings;
  }   

  public settingsChange() {
    let formattedSettings = {};
    Object.entries(this.settings).forEach(([key, value]) => {
      let formattedKey = key.replace(/_/g, ' ');
      formattedSettings[formattedKey] = value;
    });
    this.storage.set('weatherAlertSettings', formattedSettings);
  }
}

