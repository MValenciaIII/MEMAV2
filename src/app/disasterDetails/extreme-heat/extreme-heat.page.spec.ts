import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtremeHeatPage } from './extreme-heat.page';

describe('ExtremeHeatPage', () => {
  let component: ExtremeHeatPage;
  let fixture: ComponentFixture<ExtremeHeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremeHeatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtremeHeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
