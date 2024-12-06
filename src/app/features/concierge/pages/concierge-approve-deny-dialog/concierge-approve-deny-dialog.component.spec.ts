import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciergeApproveDenyDialogComponent } from './concierge-approve-deny-dialog.component';

describe('ConciergeApproveDenyDialogComponent', () => {
  let component: ConciergeApproveDenyDialogComponent;
  let fixture: ComponentFixture<ConciergeApproveDenyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciergeApproveDenyDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciergeApproveDenyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
