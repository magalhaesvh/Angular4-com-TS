import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropComponent } from './input-prop.component';

describe('InputPropComponent', () => {
  let component: InputPropComponent;
  let fixture: ComponentFixture<InputPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
