import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supply',
  templateUrl: './add-supply.page.html',
  styleUrls: ['./add-supply.page.scss'],
})
export class AddSupplyPage implements OnInit {
  title = "local-storage-app";
  // # parses stringified array to a array
  supplies = JSON.parse(localStorage.getItem('SUPPLIES'));
  currentDisplayIndex: number = -1;
  constructor(
    private router: Router
  ) {}
  public id: number = null ;
  public checklistitem: string = "";
 
  public addItem() {
    event.preventDefault();
    this.id = this.supplies.length + 1
    this.supplies.push({
      id: this.id,
      name: this.checklistitem,
      checked: false
    });
    
    /**
     * I need to send this item to the emergencyItems array on the supplies page
     * 
     * 
     * Id
     * */

    localStorage.setItem('SUPPLIES',  this.supplies);

    console.log("LocalStorage: ", localStorage);
    this.router.navigate(["tabs/tab2/supplies"]);
  }

  ngOnInit() {}

}