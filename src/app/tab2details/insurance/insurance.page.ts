import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Camera, CameraResultType } from '@capacitor/camera'
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage {

  insurances = [];
  constructor() {

  }
  /**
   * FIRST what plugin will help me store this image. 
   * MAKE A FUNCTION TO BE ABLE TO TAKE A PICTURE
   * ENCODE IMAGE IN BASE64 OR USE FILE URI
   * BASE64 is prob not the best practice for storing images. Especiallys since their long strings. 
   * The clicking upload photo should bring up Photo album
   * 
   */
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

  private selectPhoto() {
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing:false,
        resultType: CameraResultType.Uri
      })
      var imagePath = image.webPath;
    }
  }
}
