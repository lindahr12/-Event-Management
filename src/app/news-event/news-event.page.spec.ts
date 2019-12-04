import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsEventPage } from './news-event.page';

describe('NewsEventPage', () => {
  let component: NewsEventPage;
  let fixture: ComponentFixture<NewsEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
