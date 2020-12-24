import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionJoinPage } from './session-join.page';

describe('SessionJoinPage', () => {
  let component: SessionJoinPage;
  let fixture: ComponentFixture<SessionJoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionJoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionJoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
