import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Flashlight } from "@ionic-native/flashlight/ngx";

@Component({
  selector: "app-flashlight",
  templateUrl: "./flashlight.page.html",
  styleUrls: ["./flashlight.page.scss"],
})
export class FlashlightPage {
  isTorch = false;

  constructor(private flashlight: Flashlight) {}

  onFlashlight() {
    if (this.flashlight.available()) {
      this.isTorch = false;
      this.flashlight.switchOn();
    } else {
      alert("Flashlight Not Available");
    }
  }

  offFlashlight() {
    this.isTorch = true;
    this.flashlight.switchOff();
  }
}
