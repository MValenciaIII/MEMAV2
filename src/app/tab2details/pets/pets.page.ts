import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-pets",
  templateUrl: "./pets.page.html",
  styleUrls: ["./pets.page.scss"],
})
export class PetsPage {
  emergencyItem = [
    {
      name: "FOOD/WATER",
      checked: false,
    },
    {
      name: "MEDICINES & MEDICAL RECORDS",
      checked: false,
    },
    {
      name: "FIRST AID",
      checked: false,
    },
    {
      name: "COLLAR WITH ID TAG, HARNESS OR LEASH",
      checked: false,
    },
    {
      name: "IMPORTANT INFORMATION",
      checked: false,
    },
    {
      name: "CRATE OR OTHER PET CARRIER",
      checked: false,
    },
    {
      name: "SANITATION",
      checked: false,
    },
    {
      name: "A PICTURE OF YOU AND YOUR PET TOGETHER",
      checked: false,
    },
    {
      name: "FAMILIAR ITEMS",
      checked: false,
    },
  ];
  constructor() {
    // Called when application is first initialized, or when page is refreshed..
    console.log("constructor()... ");
    // If localStorage has not been initialized, then initialize it by setting them all to false.
    if (localStorage.length == 0) {
      // For each item in emergencyItem, set the "name" and "checked" in localStorage.
      for (var i = 0; i < this.emergencyItem.length; i++) {
        console.log(
          "i: ",
          i,
          "localStorage: ",
          localStorage.key(i),
          this.emergencyItem[i].name
        );
        localStorage.setItem(
          this.emergencyItem[i].name,
          this.emergencyItem[i].checked.toString()
        );
        console.log("localStorage: ", localStorage);
      }
    }
    console.log("Local Storage: " + localStorage.length);
  }

  ionViewWillEnter() {
    console.log("I just entered the pets page");
    // Load the emergencyItems from localStorage
    // Iterating through the localStorage to get the "true"/"false" boolean.
    for (var i = 0; i < this.emergencyItem.length; i++) {
      // When true, set emergency items to true. If false, set emergency items to false.
      this.emergencyItem[i].checked = JSON.parse(
        localStorage.getItem(this.emergencyItem[i].name)
      );
    }
  }

  ionViewWillLeave() {
    // Set the emergencyItems into localStorage
    // The "checked" flags could have changed from "false". Need to set them if so.
    for (var i = 0; i < this.emergencyItem.length; i++) {
      localStorage.getItem(this.emergencyItem[i].name);
    }
    console.log("I just left the supplies page");
    console.log(localStorage);
  }

  onClick(emergencyItem) {
    // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
    localStorage.setItem(emergencyItem.name, emergencyItem.checked);
    console.log(emergencyItem);
  }
}
