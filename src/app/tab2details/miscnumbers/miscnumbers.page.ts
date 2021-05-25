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
  otherNumber = [
    {
      title: "EMERGENCY SERVICES",
      name:
        "Police Phone:",
      input: this.input,
    },
    {
      title: "",
      name:
        "Fire Phone:",
      input: this.input,
    },
    {
      title: "DOCTOR",
      name: this.input,
      input: this.input,
    },
    // {
    //   title: "",
    //   name:
    //     "",
    //   input: this.input,
    // },
  ];
 
 
  constructor(private navCtrl: NavController) {
  
  }
  

  ionViewWillEnter() {
  }

  ionViewWillLeave() {
  
  }

  onClick() {
  
  }


  ngOnInit() {
  }

}
