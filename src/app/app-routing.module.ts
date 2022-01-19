import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: 'disaster',
    loadChildren: () => import('./disaster/disaster.module').then( m => m.DisasterPageModule)
  },
  {
    path: 'tornadoes',
    loadChildren: () => import('./disasterDetails/tornadoes/tornadoes.module').then( m => m.TornadoesPageModule)
  },
  {
    path: 'add-supply',
    loadChildren: () => import('./tab2details/add-supply/add-supply.module').then( m => m.AddSupplyPageModule)
  },
  {
    path: 'weather-alert-settings',
    loadChildren: () => import('./weather-alert-settings/weather-alert-settings.module').then( m => m.WeatherAlertSettingsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
