import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.page.html',
  styleUrls: ['./supplies.page.scss'],
})
export class SuppliesPage implements OnInit {

  

  data: any;
  constructor(public storage: Storage) { 
    this.data = {}
    let emergencyItems = [
      {
        id:0,
        name: "FLASHLIGHT",
        checked: false
      },
      {
        id:1,
        name: "FIRST AID KIT",
        checked: false
      },
      {
        id:2,
        name: "MEDICINES AND MEDICAL RECORDS",
        checked: false
      },
      {
        id:3,
        name: "WATER",
        checked: false
      },
      {
        id:4,
        name: "FOOD",
        checked: false
      },
      {
        id:5,
        name: "RADIO",
        checked: false
      },
      {
        id:6,
        name: "EXTRA BATTERIES",
        checked: false
      },
      {
        id:7,
        name: "CAN OPENER",
        checked: false
      },
      {
        id:8,
        name: "WHISTLE",
        checked: false
      },
      {
        id:9,
        name: "WRENCH OR PLIES",
        checked: false
      },
      {
        id:10,
        name: "LOCAL MAP",
        checked: false
      },
      {
        id:11,
        name: "MOBILE DEVICE EMERGENCY CHARGER",
        checked: false
      },
      {
        id:12,
        name: "TOWELS,GARBAGE BAGS, AND PLASTIC TIES",
        checked: false
      },
      {
        id:13,
        name: "FACE MASK",
        checked: false
      }
    ];
    this.setValue("items", emergencyItems);
  }
// functions under me super critical to loading data.
  ionViewWillEnter() {
    console.log("I just entered supplies page");
    }
    ionViewWillLeave() {
    console.log("I just left the supplies page");
    }
  // IF CHECKED VALUE ONCHANGE run "setValue"
  setValue(key: string, value: any) {
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);

      //get Value Saved in key
      this.getValue(key);

    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }
  // WINDOW ONLOAD getValue() 
  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log('get ' + key + ' ', val);
      this.data[key] = "";
      this.data[key] = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    });
  }
  
  /* 
  //Create a data list inside this page
  send the list to HTML page
  create functions to set,get data from ionic Storage
  
  */
  ngOnInit() {
  }

}
