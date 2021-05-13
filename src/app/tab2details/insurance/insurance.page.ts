import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage {

  insurances = [];
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
    this.insurances = JSON.parse(localStorage.getItem('INSURANCES'))
    console.log("I just entered contacts page");
  }
  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }
}
