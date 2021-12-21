import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSupplyPage } from './add-supply.page';

describe('AddSupplyPage', () => {
  let component: AddSupplyPage;
  let fixture: ComponentFixture<AddSupplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSupplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
