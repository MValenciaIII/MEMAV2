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
    path: 'weather-alert-settings',
    loadChildren: () => import('./weather-alert-settings/weather-alert-settings.module').then( m => m.WeatherAlertSettingsPageModule)
  },
  {
    path: 'edit-emergency-place',
    loadChildren: () => import('./tab2details/edit-emergency-place/edit-emergency-place.module').then( m => m.EditEmergencyPlacePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
