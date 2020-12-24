import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverParticipantViewPage } from './popover-participant-view.page';

describe('PopoverParticipantViewPage', () => {
  let component: PopoverParticipantViewPage;
  let fixture: ComponentFixture<PopoverParticipantViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverParticipantViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverParticipantViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
