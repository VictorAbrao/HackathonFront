import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordDeleteDialogComponent } from './keyword-delete-dialog.component';

describe('KeywordDeleteDialogComponent', () => {
  let component: KeywordDeleteDialogComponent;
  let fixture: ComponentFixture<KeywordDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
