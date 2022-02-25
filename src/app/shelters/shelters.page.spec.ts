import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SheltersPage } from './shelters.page';

describe('SheltersPage', () => {
  let component: SheltersPage;
  let fixture: ComponentFixture<SheltersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheltersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SheltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
