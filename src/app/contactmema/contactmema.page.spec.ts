import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactmemaPage } from './contactmema.page';

describe('ContactmemaPage', () => {
  let component: ContactmemaPage;
  let fixture: ComponentFixture<ContactmemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactmemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactmemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
