import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionAssignmentViewPage } from './session-assignment-view.page';

describe('SessionAssignmentViewPage', () => {
  let component: SessionAssignmentViewPage;
  let fixture: ComponentFixture<SessionAssignmentViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionAssignmentViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionAssignmentViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
