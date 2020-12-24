import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionInitiatePage } from './session-initiate.page';

describe('SessionInitiatePage', () => {
  let component: SessionInitiatePage;
  let fixture: ComponentFixture<SessionInitiatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionInitiatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionInitiatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
