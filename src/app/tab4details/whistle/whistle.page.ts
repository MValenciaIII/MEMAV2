import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-whistle',
  templateUrl: './whistle.page.html',
  styleUrls: ['./whistle.page.scss'],
})
export class WhistlePage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }
  ngOnInit() {
  }
 
   audio = new Audio('assets/whistle.mp3');
    whistleButton(){
      this.audio.play();

 }

}
