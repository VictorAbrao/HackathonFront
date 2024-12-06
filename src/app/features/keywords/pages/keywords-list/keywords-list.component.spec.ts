import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsListComponent } from './keywords-list.component';

describe('KeywordsListComponent', () => {
  let component: KeywordsListComponent;
  let fixture: ComponentFixture<KeywordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
