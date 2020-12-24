import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionViewPage } from './session-view.page';

describe('SessionViewPage', () => {
  let component: SessionViewPage;
  let fixture: ComponentFixture<SessionViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
