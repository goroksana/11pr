import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestObjectComponent } from './largest-object.component';

describe('LargestObjectComponent', () => {
  let component: LargestObjectComponent;
  let fixture: ComponentFixture<LargestObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargestObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargestObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
