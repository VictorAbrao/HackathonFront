import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciergeListComponent } from './concierge-list.component';

describe('ConciergeListComponent', () => {
  let component: ConciergeListComponent;
  let fixture: ComponentFixture<ConciergeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciergeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciergeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
