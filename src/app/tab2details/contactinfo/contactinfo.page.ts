import { Component, OnInit } from '@angular/core';
// import { LocalStorageService } from "../services/local-storage.service";
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
  contacts = JSON.parse(localStorage.getItem('CONTACTS')) || [];
  currentDisplayIndex: number = -1;
  constructor(
    private router: Router
  ) {}
  public id: number = null ;
  public firstname: string = "";
  public lastname: string = "";
  public phone: number = null;
  public address: string = "";

  

  public addPerson() {
    event.preventDefault();
    this.id = this.contacts.length + 1
    this.contacts.push({
      id: this.id,
      firstName: this.firstname,
      lastName: this.lastname,
      phone: this.phone,
      address: this.address,
    });
    
    localStorage.setItem('CONTACTS', JSON.stringify(this.contacts));

    console.log("LocalStorage: ", localStorage);
    this.router.navigate(["tabs/tab2/contacts"]);
  }

  ngOnInit() {}
}