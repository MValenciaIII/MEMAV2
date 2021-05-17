import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-miscnumbers',
  templateUrl: './miscnumbers.page.html',
  styleUrls: ['./miscnumbers.page.scss'],
})
export class MiscnumbersPage implements OnInit {

  public input: string = "";
  public title: string = "";
  public name: string = "";
  miscNumbers = [
    {
      title: "EMERGENCY SERVICES",
      input: this.input,
      input2: this.input,
    },
    {
      title: "DOCTOR",
      name: this.input,
      input: this.input,
    },
    {
      title: "PEDIATRICIAN",
      name: this.input,
      input: this.input,
    },
    {
      title: "VETERINARIAN",
      name: this.input,
      input: this.input,
    },
    {
      title: "UTILITIES",
      name:
        "Having an out-of-town meeting place can help you reunite if a diaster happens and you cannot get home or to your out-of-neighborhood meeting place; or your family is not together and your community is instructed to evacuate the area. This meeting place could be the home of a relative or family friend. Make sure everyone knows the address of the meeting place and dicuss ways you could get there.",
      input: this.input,
    },
  ];
  constructor(private navCtrl: NavController) {
    // Called first time before the ngOnInit()
    var myArr = [];
    console.log("constructor()... ");
    // If localStorage has not been initialized, then initialize it by setting them all to false.
    if (localStorage.length == 0) {
      for (var i = 0; i < this.miscNumbers.length; i++) {
        localStorage.setItem(
          this.miscNumbers[i].input,
          this.miscNumbers[i].input
        );
      }
    }
    console.log("Local Storage: " + localStorage.length);
  }

  ionViewWillEnter() {
    //Load the emergencyItems from localStorage
    console.log("I just entered the supplies page");
    // console.log(this.emergencyItem);
    // Iterating through the localStorage to get the "true"/"false" boolean.
    for (var i = 0; i < this.miscNumbers.length; i++) {
      // When true, set emergency items to true. If false, set emergency items to false. Has to use "startsWith", because the value in localStorage is actually a string. Couldn't find a "toBoolean()" method.
      this.miscNumbers[i].input = localStorage.getItem(
        this.miscNumbers[i].input
      );
    }
    // console.log(localStorage);
  }

  ionViewWillLeave() {
    //Set the emergencyItems into localStorage
    // The "checked" flags could have changed from "false". Need to set them if so.
    for (var i = 0; i < this.miscNumbers.length; i++) {
      localStorage.getItem(this.miscNumbers[i].input);
    }
    console.log("I just left the supplies page");
    // console.log(this.emergencyItem);
    console.log(localStorage);
  }

  onClick(miscNumber) {
    // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
    // if (localStorage.getItem(emergencyItem.name) == "false")
    // localStorage.setItem(emergencyItem.name, "true");
    // else localStorage.setItem(emergencyItem.name, "false");
    for (var i = 0; i < miscNumber.length; i++) {
      localStorage.setItem(miscNumber[i].name, miscNumber[i].input);
    }
    // localStorage.setItem(emergencyPlace.name, emergencyPlace.input);
    // console.log("Local: " + localStorage.getItem(emergencyItem.name));
    console.log("Emergency place: ", miscNumber);
    console.log("Local storage: ", localStorage);
    this.navCtrl.navigateRoot("tabs/tab2");
  }


  ngOnInit() {
  }

}
