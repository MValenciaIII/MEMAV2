import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicStorageModule } from "@ionic/storage-angular";
import { Flashlight } from "@ionic-native/flashlight/ngx";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet"
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    LeafletModule,
  ],
  providers: [
    Flashlight,
    StatusBar,
    SplashScreen,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
