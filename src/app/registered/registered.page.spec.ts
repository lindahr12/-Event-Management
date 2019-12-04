import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisteredPage } from './registered.page';

describe('RegisteredPage', () => {
  let component: RegisteredPage;
  let fixture: ComponentFixture<RegisteredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
