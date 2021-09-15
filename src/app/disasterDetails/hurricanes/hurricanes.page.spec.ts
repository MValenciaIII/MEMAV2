import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HurricanesPage } from './hurricanes.page';

describe('HurricanesPage', () => {
  let component: HurricanesPage;
  let fixture: ComponentFixture<HurricanesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurricanesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HurricanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
