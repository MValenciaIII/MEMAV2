import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tornadoes',
  templateUrl: './tornadoes.page.html',
  styleUrls: ['./tornadoes.page.scss'],
})
export class TornadoesPage implements OnInit {
public title: string = ""
public name: string = ""
emergencyPlace = [
  {
    title: "INDOOR",
    name:
      "If you live in an area where tornadoes, hurricanes, or other high-wind storms can happen, make sure everyone knows where to go for protection. This could be a small, interior, windowless room, such as a closet or bathroom, on the lowest level of sturdy building, or a tornado safe room or storm shelter.",
  },
  {
    title: "NEIGHBORHOOD",
    name:
      "This is a place in your neighborhood where your household members will meet if there is a fire or other emergency and you need to leave your home. The meeting place could be a big tree, a mailbox at the end of the driveway, or a neighbor's house.",
  },
  {
    title: "OUT-OF-NEIGHBORHOOD",
    name:
      "This is a place where your family will meet if a diaster happens when you're not at home and you can't get back to your home. This could be a library, community center, house of worship, or family friend's home",
  },
  {
    title: "OUT-OF-TOWN",
    name:
      "Having an out-of-town meeting place can help you reunite if a diaster happens and you cannot get home or to your out-of-neighborhood meeting place; or your family is not together and your community is instructed to evacuate the area. This meeting place could be the home of a relative or family friend. Make sure everyone knows the address of the meeting place and dicuss ways you could get there.",
  },
];
  constructor() { }

  ngOnInit() {
  }

}
