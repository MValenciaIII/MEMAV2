import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemawebsitePage } from './memawebsite.page';

describe('MemawebsitePage', () => {
  let component: MemawebsitePage;
  let fixture: ComponentFixture<MemawebsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemawebsitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemawebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
