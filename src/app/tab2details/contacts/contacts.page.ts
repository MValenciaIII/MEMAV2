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

  DeleteContact(phone) {
    
  //   // todo: filter local storage contacts array against ID
  //   var storedNames = JSON.parse(localStorage.getItem("CONTACTS"));
  //   console.log("Stored Names" + storedNames)

  //   // here you need to make a loop to find the index of item to delete
  //   var indexToRemove = 1;

  //   //remove item selected, second parameter is the number of items to delete 
  //   storedNames.slice(indexToRemove, 1);

  //  // Put the object into storage
  //  localStorage.setItem('CONTACTS', JSON.stringify(storedNames));
 
    var bookmarks = JSON.parse(localStorage.getItem("CONTACTS"));
    // console.log(i)
    console.clear();
    console.log("Before splice");
    // console.log(JSON.stringify(bookmarks));
    console.log((bookmarks));
    bookmarks.splice(bookmarks);
    console.log("After splice");
    console.log(JSON.stringify(bookmarks));
    localStorage.setItem("CONTACTS", JSON.stringify(bookmarks));

  }

  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }
}
