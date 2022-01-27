import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEmergencyPlacePage } from './edit-emergency-place.page';

describe('EditEmergencyPlacePage', () => {
  let component: EditEmergencyPlacePage;
  let fixture: ComponentFixture<EditEmergencyPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmergencyPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEmergencyPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
