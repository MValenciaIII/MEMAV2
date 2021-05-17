import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpsLocationPage } from './gps-location.page';

describe('GpsLocationPage', () => {
  let component: GpsLocationPage;
  let fixture: ComponentFixture<GpsLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpsLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
