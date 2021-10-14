import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hurricanes',
  templateUrl: './hurricanes.page.html',
  styleUrls: ['./hurricanes.page.scss'],
})
export class HurricanesPage implements OnInit {
  public title: string = ""
  public name: string = ""
  homeTopic = [
    {
      title: "YOU ARE IN YOUR HOME DURING A TORNADO:",
      name:
        "Go to the lowest level of the home, an inner hallway, or smaller inner room without windows, such as a closet or bathroom.",
      
    },
    {
      name:
        "Get away from windows and go to the center of the room. Avoid corners, because they tend to attract debris.",
    },
    {
      name:
        "Get under a sturdy piece of furniture, such as a workbench or heavy table.",
    }
  ];
  
  mHomeTopic = [
    {
      title:"IF YOU ARE IN A MOBILE HOME",
      name:"Evacuate the mobile home, even if it is equipped with tie-downs"
    },
    {
      name:"Take shelter in a building with a strong foundation, or if one is not available, lie in a ditch or low-lying area a safe distance away from the mobile home."
    }
  ]
  
  workTopic = [
    {
      title:"IF YOU ARE AT WORK OR SCHOOL:",
      name:"Go to the basement or to an inside hallway at the lowest level of the building."
    },
    {
      name:"Avoid places with wide-span roofs, such as auditoriums, cafeterias, large hallways or shopping malls."
    },
    {
      name:"Use your arms to protect your head and neck."
    }
  ]
  
  outsideTopic = [
    {
      title:"IF OUTDOORS:",
      name:"If possible, get inside a sturdy building with a concrete foundation."
    },
    {
      name:"If shelter is not available, or there is no time to get indoors, lie in a ditch or low-lying area or crouch near a strong building."
    },
    {
      name:"Be aware of the potential for flooding."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
