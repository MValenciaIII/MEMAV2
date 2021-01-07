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
    let emergencyItem = [
      {
        
        name: "FLASHLIGHT",
        checked: false
      },
      {
        
        name: "FIRST AID KIT",
        checked: false
      },
      {
        
        name: "MEDICINES AND MEDICAL RECORDS",
        checked: false
      },
      {
        
        name: "WATER",
        checked: false
      },
      {
        
        name: "FOOD",
        checked: false
      },
      {
        
        name: "RADIO",
        checked: false
      },
      {
        
        name: "EXTRA BATTERIES",
        checked: false
      },
      {
        
        name: "CAN OPENER",
        checked: false
      },
      {
        
        name: "WHISTLE",
        checked: false
      },
      {
        
        name: "WRENCH OR PLIES",
        checked: false
      },
      {
        
        name: "LOCAL MAP",
        checked: false
      },
      {
        
        name: "MOBILE DEVICE EMERGENCY CHARGER",
        checked: false
      },
      {
        
        name: "TOWELS,GARBAGE BAGS, AND PLASTIC TIES",
        checked: false
      },
      {
        
        name: "FACE MASK",
        checked: false
      }
    ];
    this.setValue("emergencyItems", emergencyItem);
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
      console.log("worked")

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
