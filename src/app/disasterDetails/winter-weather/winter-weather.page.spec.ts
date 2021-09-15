import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinterWeatherPage } from './winter-weather.page';

describe('WinterWeatherPage', () => {
  let component: WinterWeatherPage;
  let fixture: ComponentFixture<WinterWeatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterWeatherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinterWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
