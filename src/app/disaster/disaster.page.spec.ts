import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisasterPage } from './disaster.page';

describe('DisasterPage', () => {
  let component: DisasterPage;
  let fixture: ComponentFixture<DisasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
