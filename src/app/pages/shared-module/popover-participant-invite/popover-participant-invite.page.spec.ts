import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverParticipantInvitePage } from './popover-participant-invite.page';

describe('PopoverParticipantInvitePage', () => {
  let component: PopoverParticipantInvitePage;
  let fixture: ComponentFixture<PopoverParticipantInvitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverParticipantInvitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverParticipantInvitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
