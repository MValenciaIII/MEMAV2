import { Component } from "@angular/core";
// import { NavController } from "ionic-angular";
import { Tab2Page } from "src/app/tab2/tab2.page";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage {
  contacts = [];
   id = 0;

  constructor(private router: Router) {
    this.contacts = JSON.parse(localStorage.getItem('CONTACTS'))
  }
  ionViewWillEnter() {
    console.log("contact", this.contacts)
    // # If new contact is entered, before component mounts, refresh from local storage
    this.contacts = JSON.parse(localStorage.getItem('CONTACTS'))
    console.log("I just entered contacts page");
  }
  // EditContact() {
  //   // this.router.navigate(["tabs/tab2/contacts/info/${id}"]);
  //   // // var myArr = [];
  //   // let id = event.target.dataset.id; 
  //   // // If localStorage has not been initialized, then initialize it by setting them all to false.
  //   // for (var i = 0; i < this.contacts.length; i++) {
  //   //   // When true, set emergency items to true. If false, set emergency items to false.
  //   //   this.contacts[i].id = JSON.parse(
  //   //     localStorage.getItem("CONTACTS")
  //   //   );
  //   // }
  //   // console.log("Local Storage: " + localStorage.length);
  //   // todo: route to an "id" page?
  // }

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
