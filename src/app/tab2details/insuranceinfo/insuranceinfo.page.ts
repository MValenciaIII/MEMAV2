import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-insuranceinfo',
  templateUrl: './insuranceinfo.page.html',
  styleUrls: ['./insuranceinfo.page.scss'],
})
export class InsuranceinfoPage implements OnInit {

  title = "local-storage-app";
  // # parses stringified array to a array
   insurances = JSON.parse(localStorage.getItem('INSURANCES')) || [];
  currentDisplayIndex: number = -1;
  constructor(
    private router: Router
  ) {}
  public id: string = "";
  public name: string = "";
  public policy: number = null;
  public company: string = "";
  public phoneNum: number = null;
  public agent: string = "";
  public insurance = {
    id: this.id,
    Name: this.name,
    Policy: this.policy,
    Company: this.company,
    Phone: this.phoneNum,
    Agent: this.agent
  };
  public addInsurance() {
    event.preventDefault();

    // this.person.id = "contact_" + JSON.stringify(this.contacts.length + 1);
    this.insurance.id = JSON.stringify(localStorage.length + 1);
    this.insurance.Name = this.name;
    this.insurance.Policy = this.policy;
    this.insurance.Company = this.company;
    this.insurance.Phone = this.phoneNum;
    this.insurance.Agent = this.agent;
    this.insurances.push({
      id: this.id,
    Name: this.name,
    Policy: this.policy,
    Company: this.company,
    Phone: this.phoneNum,
    Agent: this.agent
    });
    
    
    // console.log(this.contacts);
    // this.navCtrl.navigateRoot("tabs/tab2/contacts");
    // console.log("this.person: ", this.person);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: this.insurance,
      },
    };
    this.router.navigate(["tabs/tab2/insurance"], navigationExtras);
  }

  ngOnInit() {}

}
