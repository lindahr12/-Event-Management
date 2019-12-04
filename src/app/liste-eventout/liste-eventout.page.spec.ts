import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeEventoutPage } from './liste-eventout.page';

describe('ListeEventoutPage', () => {
  let component: ListeEventoutPage;
  let fixture: ComponentFixture<ListeEventoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEventoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeEventoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
