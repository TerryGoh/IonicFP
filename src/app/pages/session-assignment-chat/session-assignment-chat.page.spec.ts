import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionAssignmentChatPage } from './session-assignment-chat.page';

describe('SessionAssignmentChatPage', () => {
  let component: SessionAssignmentChatPage;
  let fixture: ComponentFixture<SessionAssignmentChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionAssignmentChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionAssignmentChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
