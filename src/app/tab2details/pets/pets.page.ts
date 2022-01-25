import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-pets",
  templateUrl: "./pets.page.html",
  styleUrls: ["./pets.page.scss"],
})
export class PetsPage implements OnInit {
  supplies = [];
  adding = false;
  newSupply = null;

  constructor(public storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.supplies = await this.storage.get('emergencyPetSupplies') || DefaultPetSupplies;
    await this.storage.set('emergencyPetSupplies', this.supplies);
  }   

  async suppliesChange() {
    await this.storage.set('emergencyPetSupplies', this.supplies);
  }

  async saveNewSupply() {
    this.supplies.push({name: this.newSupply, checked: false});
    await this.storage.set('emergencyPetSupplies', this.supplies);
    this.newSupply = null;
    this.adding = false;
  }

  async deleteSupply(supply) {
    this.supplies = this.supplies.filter(s => s.name !== supply.name)
    await this.storage.set('emergencyPetSupplies', this.supplies);
  }
}

const DefaultPetSupplies = [
  {
    name: "Vaccination Records",
    checked: false,
  },
  {
    name: "Food",
    checked: false,
  },
  {
    name: "Water",
    checked: false,
  },
  {
    name: "Medicines and Medical Records",
    checked: false,
  },
  {
    name: "First Aid",
    checked: false,
  },
  {
    name: "Collar with ID tag, Harness or Leash",
    checked: false,
  },
  {
    name: "Other Important Information",
    checked: false,
  },
  {
    name: "Crate or Other Pet Carrier",
    checked: false,
  },
  {
    name: "Sanitation Supplies",
    checked: false,
  },
  {
    name: "Picture of Pet",
    checked: false,
  }
];
