import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextboxComponent } from './child-textbox.component';

describe('ChildTextboxComponent', () => {
  let component: ChildTextboxComponent;
  let fixture: ComponentFixture<ChildTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
