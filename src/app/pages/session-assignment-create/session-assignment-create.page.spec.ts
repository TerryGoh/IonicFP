import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionAssignmentCreatePage } from './session-assignment-create.page';

describe('SessionAssignmentCreatePage', () => {
  let component: SessionAssignmentCreatePage;
  let fixture: ComponentFixture<SessionAssignmentCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionAssignmentCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionAssignmentCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
