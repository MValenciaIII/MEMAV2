import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-whistle",
  templateUrl: "./whistle.page.html",
  styleUrls: ["./whistle.page.scss"],
})
export class WhistlePage implements OnInit {
  constructor() {}
  ngOnInit() {}

  whistleButton() {
    let audio = new Audio("assets/human_whistle_fingers_attention.mp3");
    audio.play();
  }
}
