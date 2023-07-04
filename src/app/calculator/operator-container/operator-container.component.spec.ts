import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorContainerComponent } from './operator-container.component';

describe('OperatorContainerComponent', () => {
  let component: OperatorContainerComponent;
  let fixture: ComponentFixture<OperatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
