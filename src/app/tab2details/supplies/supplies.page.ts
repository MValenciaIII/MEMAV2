import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-supplies",
  templateUrl: "./supplies.page.html",
  styleUrls: ["./supplies.page.scss"],
})
export class SuppliesPage implements OnInit {
  supplies = [];
  adding = false;
  newSupply = null;

  constructor(public storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.supplies = await this.storage.get('emergencySupplies') || DefaultSupplies;
    await this.storage.set('emergencySupplies', this.supplies);
  }   

  async suppliesChange() {
    await this.storage.set('emergencySupplies', this.supplies);
  }

  async saveNewSupply() {
    this.supplies.push({name: this.newSupply, checked: false});
    await this.storage.set('emergencySupplies', this.supplies);
    this.newSupply = null;
    this.adding = false;
  }

  async deleteSupply(supply) {
    this.supplies = this.supplies.filter(s => s.name !== supply.name)
    await this.storage.set('emergencySupplies', this.supplies);
  }
}


const DefaultSupplies = [
  {
    name: "Flashlight",
    checked: false
  },
  {
    name: "First Aid Kit",
    checked: false
  },
  {
    name: "Medications And Medical Records",
    checked: false
  },
  {
    name: "Water",
    checked: false
  },
  {
    name: "Food",
    checked: false
  },
  {
    name: "Radio",
    checked: false
  },
  {
    name: "Extra Batteries",
    checked: false
  },
  {
    name: "Can Opener",
    checked: false
  },
  {
    name: "Whistle",
    checked: false
  },
  {
    name: "Mobile Device Emergency Charger",
    checked: false
  },
  {
    name: "Face Covering",
    checked: false
  },
  {
    name: "Important Documents (Insurance, Birth Certificates, etc.)",
    checked: false 
  }
];