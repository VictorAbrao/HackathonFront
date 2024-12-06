import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciergeFormComponent } from './concierge-form.component';

describe('ConciergeFormComponent', () => {
  let component: ConciergeFormComponent;
  let fixture: ComponentFixture<ConciergeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciergeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciergeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
