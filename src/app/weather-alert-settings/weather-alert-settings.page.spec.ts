import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherAlertSettingsPage } from './weather-alert-settings.page';

describe('WeatherAlertSettingsPage', () => {
  let component: WeatherAlertSettingsPage;
  let fixture: ComponentFixture<WeatherAlertSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAlertSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherAlertSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
