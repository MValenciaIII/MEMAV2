import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage implements OnInit {
  contacts = [];

  constructor(private router: Router, private storage: Storage) {
    this.contacts = JSON.parse(localStorage.getItem('emergencyContacts'))
  }

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    this.contacts = await this.storage.get('emergencyContacts') || [];
  }

  async deleteContact(event) {
    let id = event.target.dataset.id; 
    this.contacts = this.contacts.filter(card => card.id != id);
    await this.storage.set("emergencyContacts", this.contacts);
  }
}
