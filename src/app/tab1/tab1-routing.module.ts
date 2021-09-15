import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: "disaster",
    loadChildren: () =>
    import("../disaster/disaster.module").then(
      (m) => m.DisasterPageModule
    )
    },
    {
      path: "",
      redirectTo: "tabs/tab1",
      pathMatch: "full",
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
