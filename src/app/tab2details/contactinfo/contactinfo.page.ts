import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.page.html',
  styleUrls: ['./contactinfo.page.scss'],
})
export class ContactinfoPage implements OnInit {
  firstname: string = null;
  lastname: string = null;
  phone: string = null;
  address: string = null;

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  ionViewWillEnter() {
    this.firstname = null;
    this.lastname = null;
    this.phone = null;
    this.address = null;
  }

  async addPerson() {
    let newContact = {
      id: new Date().getTime(),
      firstName: this.firstname,
      lastName: this.lastname,
      phone: this.phone,
      address: this.address,
    };
    
    let contacts = await this.storage.get('emergencyContacts') || [];
    contacts.push(newContact);
    await this.storage.set('emergencyContacts', contacts);
    this.router.navigate(["/tabs/tab2/contacts"]);
  }

}