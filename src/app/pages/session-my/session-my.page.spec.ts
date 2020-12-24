import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionMyPage } from './session-my.page';

describe('SessionMyPage', () => {
  let component: SessionMyPage;
  let fixture: ComponentFixture<SessionMyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionMyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionMyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
