import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotStartComponent } from './bot-start.component';

describe('BotStartComponent', () => {
  let component: BotStartComponent;
  let fixture: ComponentFixture<BotStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
