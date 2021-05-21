import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage {

  insurances = [];
  constructor() {
    this.insurances = JSON.parse(localStorage.getItem('INSURANCES'))
  }
  EditInsurance() {
    // todo: route to an "id" page?
  }
  DeleteInsurance() {
    console.clear()
    let id  = event.target.dataset.id; 
    let newArray = this.insurances.filter(card => card.id != id);
    localStorage.setItem("INSURANCES", JSON.stringify(newArray));
    window.location.reload();
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
