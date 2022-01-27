import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-edit-emergency-place',
  templateUrl: './edit-emergency-place.page.html',
  styleUrls: ['./edit-emergency-place.page.scss'],
})
export class EditEmergencyPlacePage implements OnInit {
  name: string = null;
  phone: string = null;
  address: string = null;

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  ionViewWillEnter() {
    this.name = null;
    this.phone = null;
    this.address = null;
  }

  async addPlace() {
    let newPlace = {
      id: new Date().getTime(),
      name: this.name,
      phone: this.phone,
      address: this.address,
    };
    
    let places = await this.storage.get('emergencyPlaces') || [];
    places.push(newPlace);
    await this.storage.set('emergencyPlaces', places);
    this.router.navigate(["/tabs/tab2/places"]);
  }
}
