import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(private router: Router, private storage: Storage) {
    this.places = JSON.parse(localStorage.getItem('emergencyPlaces'))
  }

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    this.places = await this.storage.get('emergencyPlaces') || [];
  }

  async deletePlace(event) {
    let id = event.target.dataset.id; 
    this.places = this.places.filter(card => card.id != id);
    await this.storage.set("emergencyPlaces", this.places);
  }
}
