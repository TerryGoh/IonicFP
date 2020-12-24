import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionAssignmentEditPage } from './session-assignment-edit.page';

describe('SessionAssignmentEditPage', () => {
  let component: SessionAssignmentEditPage;
  let fixture: ComponentFixture<SessionAssignmentEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionAssignmentEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionAssignmentEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
