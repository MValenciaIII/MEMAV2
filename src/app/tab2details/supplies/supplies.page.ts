import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Tab2Page } from "src/app/tab2/tab2.page";
// import { Storage } from "@ionic/storage";

@Component({
  selector: "app-supplies",
  templateUrl: "./supplies.page.html",
  styleUrls: ["./supplies.page.scss"],
})
export class SuppliesPage {
  emergencyItem = [
    {
      name: "FLASHLIGHT",
      checked: false,
    },
    {
      name: "FIRST AID KIT",
      checked: false,
    },
    {
      name: "MEDICINES AND MEDICAL RECORDS",
      checked: false,
    },
    {
      name: "WATER",
      checked: false,
    },
    {
      name: "FOOD",
      checked: false,
    },
    {
      name: "RADIO",
      checked: false,
    },
    {
      name: "EXTRA BATTERIES",
      checked: false,
    },
    {
      name: "CAN OPENER",
      checked: false,
    },
    {
      name: "WHISTLE",
      checked: false,
    },
    {
      name: "WRENCH OR PLIES",
      checked: false,
    },
    {
      name: "LOCAL MAP",
      checked: false,
    },
    {
      name: "MOBILE DEVICE EMERGENCY CHARGER",
      checked: false,
    },
    {
      name: "TOWELS,GARBAGE BAGS, AND PLASTIC TIES",
      checked: false,
    },
    {
      name: "FACE MASK",
      checked: false,
    },
  ];
  constructor() {
    // Called first time before the ngOnInit()
  }

  ngOnInIt() {
    //looping through the emergency list items to get the value of each item
    //Place the emergencyItems into localStorage.
    //The "checked" flags are "false" by default when the application is loaded. Need to set them.
    // Called after the constructor and called  after the first
    var myArr = [];
    for (var i = 0; i < this.emergencyItem.length; i++) {
      localStorage.setItem(
        this.emergencyItem[i].name,
        this.emergencyItem[i].checked.toString()
      );
    }
    console.log("Local Storage: " + localStorage.length);
  }

  ionViewWillEnter() {
    //Load the emergencyItems from localStorage
  }

  ionViewWillLeave() {
    //Set the emergencyItems into localStorage
    //
    // The "checked" flags could have changed from "false". Need to set them if so.
    for (var i = 0; i < this.emergencyItem.length; i++) {
      localStorage.getItem(this.emergencyItem[i].name);
    }
    console.log("I just left the supplies page");
    console.log(this.emergencyItem);
  }

  // ngOnDestroy() {
  // When cycle is destroy it reloads the page to root. Problem is when page/window reloads, there is no actual value being stored in the localStorage.
  // }

  onClick(emergencyItem) {
    // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
    if (localStorage.getItem(emergencyItem.name) == "false")
      localStorage.setItem(emergencyItem.name, "true");
    else localStorage.setItem(emergencyItem.name, "false");
    console.log("Local: " + localStorage.getItem(emergencyItem.name));
    console.log(emergencyItem);
  }
}
