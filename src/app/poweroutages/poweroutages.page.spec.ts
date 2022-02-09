import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoweroutagesPage } from './poweroutages.page';

describe('PoweroutagesPage', () => {
  let component: PoweroutagesPage;
  let fixture: ComponentFixture<PoweroutagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoweroutagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoweroutagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
