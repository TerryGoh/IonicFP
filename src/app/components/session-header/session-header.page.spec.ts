import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionHeaderPage } from './session-header.page';

describe('SessionHeaderPage', () => {
  let component: SessionHeaderPage;
  let fixture: ComponentFixture<SessionHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
