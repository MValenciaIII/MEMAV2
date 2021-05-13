import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../services/local-storage.service";
import { NavController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";
import { ContactsPage } from "../contacts/contacts.page";

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.page.html',
  styleUrls: ['./contactinfo.page.scss'],
})
export class ContactinfoPage implements OnInit {
  title = "local-storage-app";
  // # parses stringified array to a array
  contacts = JSON.parse(localStorage.getItem('CONTACTS'));
  currentDisplayIndex: number = -1;
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  public id: string = "";
  public firstname: string = "";
  public lastname: string = "";
  public phone: number = null;
  public address: string = "";
  public person = {
    id: this.id,
    firstName: this.firstname,
    lastName: this.lastname,
    phone: this.phone,
    address: this.address
  };
  public addPerson() {
    event.preventDefault();

    this.person.id = "contact_" + JSON.stringify(this.contacts.length + 1);
    // this.person.id = JSON.stringify(localStorage.length + 1);
    this.person.firstName = this.firstname;
    this.person.phone = this.phone;
    this.person.lastName = this.lastname;
    this.contacts.push({
      id: this.id,
      firstName: this.firstname,
      lastName: this.lastname,
      phone: this.phone,
      address: this.address,
    });
    
    localStorage.setItem('CONTACTS', JSON.stringify(this.contacts));
    // console.log(this.contacts);
    // this.navCtrl.navigateRoot("tabs/tab2/contacts");
    console.log("Local Storage length: " + localStorage.length);
    console.log("LocalStorage: ", localStorage);
    // console.log("this.person: ", this.person);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: this.person,
      },
    };
    this.router.navigate(["tabs/tab2/contacts"], navigationExtras);
  }

  ngOnInit() {}
}