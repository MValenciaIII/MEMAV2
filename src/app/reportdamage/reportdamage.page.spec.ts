import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportdamagePage } from './reportdamage.page';

describe('ReportdamagePage', () => {
  let component: ReportdamagePage;
  let fixture: ComponentFixture<ReportdamagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdamagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportdamagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
