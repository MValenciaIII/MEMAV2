import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SuppliesPage } from "./supplies.page";

const routes: Routes = [
  {
    path: "",
    component: SuppliesPage,
  },
  {
    path: "addSupply",
    loadChildren: () => 
      import("../add-supply/add-supply-routing.module").then(
        (m) => m.AddSupplyPageRoutingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliesPageRoutingModule {}
