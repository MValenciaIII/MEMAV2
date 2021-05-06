import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhistlePage } from './whistle.page';

describe('WhistlePage', () => {
  let component: WhistlePage;
  let fixture: ComponentFixture<WhistlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhistlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhistlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
