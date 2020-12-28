import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Tab2Page } from "src/app/tab2/tab2.page";

@Component({
  selector: "app-supplies",
  templateUrl: "./supplies.page.html",
  styleUrls: ["./supplies.page.scss"],
})
export class SuppliesPage {
  constructor(private navCtrl: NavController) {}
  ionViewWillEnter() {
    console.log("I just entered supplies page");
  }
  ionViewWillLeave() {
    console.log("I just left the supplies page");
  }
  ngOnDestroy() {
    console.log("The stack for tab two 'supplies' has been destroyed");
  }
}
