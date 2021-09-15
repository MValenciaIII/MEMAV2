import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloodsPage } from './floods.page';

describe('FloodsPage', () => {
  let component: FloodsPage;
  let fixture: ComponentFixture<FloodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
