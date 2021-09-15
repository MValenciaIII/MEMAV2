import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TornadoesPage } from './tornadoes.page';

describe('TornadoesPage', () => {
  let component: TornadoesPage;
  let fixture: ComponentFixture<TornadoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornadoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TornadoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
