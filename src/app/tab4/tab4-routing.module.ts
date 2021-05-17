import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab4Page } from "./tab4.page";

const routes: Routes = [
  {
    path: "",
    component: Tab4Page,
  },
  {
    path: "flashlight",
    loadChildren: () =>
      import("../tab4details/flashlight/flashlight.module").then(
        (m) => m.FlashlightPageModule
      ),
  },
  {
    path: "whistle",
    loadChildren: () =>
      import("../tab4details/whistle/whistle.module").then(
        (m) => m.WhistlePageModule
      ),
  },
  {
    path: "gps",
    loadChildren: () =>
      import("../tab4details/gps-location/gps-location.module").then(
        (m) => m.GpsLocationPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
