import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-miscnumbers',
  templateUrl: './miscnumbers.page.html',
  styleUrls: ['./miscnumbers.page.scss'],
})
export class MiscnumbersPage implements OnInit {
  supplies = [];
  adding = false;
  newSupply = null;

  constructor(public storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.supplies = await this.storage.get('disabilitySupplies') || DefaultSupplies;
    await this.storage.set('disabilitySupplies', this.supplies);
  }   

  async suppliesChange() {
    await this.storage.set('disabilitySupplies', this.supplies);
  }

  async saveNewSupply() {
    this.supplies.push({name: this.newSupply, checked: false});
    await this.storage.set('disabilitySupplies', this.supplies);
    this.newSupply = null;
    this.adding = false;
  }

  async deleteSupply(supply) {
    this.supplies = this.supplies.filter(s => s.name !== supply.name)
    await this.storage.set('disabilitySupplies', this.supplies);
  }
}


const DefaultSupplies = [
  {
    name: "Week-long supply of prescribed medications",
    checked: false
  },
  {
    name: "List of all medications and dosages",
    checked: false
  },
  {
    name: "Your doctor's contact information",
    checked: false
  },
  {
    name: "Copies of medical insurance, Medicare or Medicaid cards",
    checked: false
  },
  {
    name: "List of all medical supplies and equipment",
    checked: false
  },
  {
    name: "Extra Wheelchair batteries",
    checked: false
  },
  {
    name: "Backup manual wheelchair",
    checked: false
  },
  {
    name: "Extra hearing aid batteries",
    checked: false
  },
  {
    name: "Handheld device for sensory disabilities (headphones, charger, etc.)",
    checked: false
  }
]
