import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { DisasterPage } from './disaster.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterPage
  },
  {
    path: "tornadoes",
    loadChildren: () =>
    import("../disasterDetails/tornadoes/tornadoes.module").then(
      (m) => m.TornadoesPageModule
    )
  },
  {
    path: "hurricanes",
    loadChildren: () =>
    import("../disasterDetails/hurricanes/hurricanes.module").then(
      (m) => m.HurricanesPageModule
    )
  },
  {
    path: "floods",
    loadChildren: () =>
    import("../disasterDetails/floods/floods.module").then(
      (m) => m.FloodsPageModule
    )
  },
  {
    path: "extremeHeat",
    loadChildren: () =>
    import("../disasterDetails/extreme-heat/extreme-heat.module").then(
      (m) => m.ExtremeHeatPageModule
    )
  },
  {
    path: "winterWeather",
    loadChildren: () =>
    import("../disasterDetails/winter-weather/winter-weather.module").then(
      (m) => m.WinterWeatherPageModule
    )
  },
  {
    path: "earthquakes",
    loadChildren: () =>
    import("../disasterDetails/earthquakes/earthquakes.module").then(
      (m) => m.EarthquakesPageModule
    )
  },
  {
    path: "radiological",
    loadChildren: () =>
    import("../disasterDetails/radiological/radiological.module").then(
      (m) => m.RadiologicalPageModule
    )
  },
  {
    path: "covid",
    loadChildren: () =>
    import("../disasterDetails/covid/covid.module").then(
      (m) => m.CovidPageModule
    )
  },
  {
    path: "",
    redirectTo: "/tab1/disaster",
    pathMatch: "full",
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterPageRoutingModule {}
