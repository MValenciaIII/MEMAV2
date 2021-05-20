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
   id = 0;

  constructor() {
    this.contacts = JSON.parse(localStorage.getItem('CONTACTS'))
  }
  ionViewWillEnter() {
    console.log("contact", this.contacts)
    // # If new contact is entered, before component mounts, refresh from local storage
    this.contacts = JSON.parse(localStorage.getItem('CONTACTS'))
    console.log("I just entered contacts page");
  }
  EditContact() {
    // todo: route to an "id" page?
  }

  DeleteContact(event) {

    let id = event.target.dataset.id; 
    let newArray = this.contacts.filter(card => card.id != id);
    localStorage.setItem("CONTACTS", JSON.stringify(newArray));
    window.location.reload();

  }

  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }
}
