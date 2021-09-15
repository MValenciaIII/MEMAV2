import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadiologicalPage } from './radiological.page';

describe('RadiologicalPage', () => {
  let component: RadiologicalPage;
  let fixture: ComponentFixture<RadiologicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiologicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadiologicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
