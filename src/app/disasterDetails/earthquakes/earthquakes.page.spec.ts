import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarthquakesPage } from './earthquakes.page';

describe('EarthquakesPage', () => {
  let component: EarthquakesPage;
  let fixture: ComponentFixture<EarthquakesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarthquakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
