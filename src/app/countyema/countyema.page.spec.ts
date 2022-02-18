import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountyemaPage } from './countyema.page';

describe('CountyemaPage', () => {
  let component: CountyemaPage;
  let fixture: ComponentFixture<CountyemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountyemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
