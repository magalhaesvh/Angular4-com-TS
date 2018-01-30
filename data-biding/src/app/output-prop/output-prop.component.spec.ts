import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropComponent } from './output-prop.component';

describe('OutputPropComponent', () => {
  let component: OutputPropComponent;
  let fixture: ComponentFixture<OutputPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
