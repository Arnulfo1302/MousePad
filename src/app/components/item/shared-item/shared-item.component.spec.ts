import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedItemComponent } from './shared-item.component';

describe('SharedItemComponent', () => {
  let component: SharedItemComponent;
  let fixture: ComponentFixture<SharedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
