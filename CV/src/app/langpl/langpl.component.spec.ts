import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangplComponent } from './langpl.component';

describe('LangplComponent', () => {
  let component: LangplComponent;
  let fixture: ComponentFixture<LangplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
