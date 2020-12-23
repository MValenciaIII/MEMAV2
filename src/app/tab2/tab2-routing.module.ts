import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Tab2Page } from "./tab2.page";

const routes: Routes = [
  {
    path: "",
    component: Tab2Page,
  },
  {
    path: "supplies",
    loadChildren: () =>
      import("../tab2details/supplies/supplies.module").then(
        (m) => m.SuppliesPageModule
      ),
    //supplies (or the supplies checklist button) is a child route of tab2.
  },
  {
    path: "contacts",
    loadChildren: () =>
      import("../tab2details/contacts/contacts.module").then(
        (m) => m.ContactsPageModule
      ),
  },
  {
    path: "",
    redirectTo: "/tabs/tab2",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
