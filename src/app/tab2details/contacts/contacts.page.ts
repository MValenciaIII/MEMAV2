import { Component } from "@angular/core";
// import { NavController } from "ionic-angular";
import { Tab2Page } from "src/app/tab2/tab2.page";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage {
  contacts = [];
  constructor() {

  }
  EditContact() {
    // todo: route to an "id" page?
  }
  DeleteContact() {
    // todo: filter local storage contacts array against ID
  }
  ionViewWillEnter() {
    // # If new contact is entered, before component mounts, refresh from local storage
    this.contacts = JSON.parse(localStorage.getItem('CONTACTS'))
    console.log("I just entered contacts page");
  }
  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }
}
