import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Keyword } from '../../../../core/models/keyword.model';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  selector: 'app-keyword-delete-dialog',
  templateUrl: './keyword-delete-dialog.component.html',
  styleUrls: ['./keyword-delete-dialog.component.scss']
})
export class KeywordDeleteDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Keyword,
    private dialogRef: MatDialogRef<KeywordDeleteDialogComponent>
  ) {}

  confirm() {
    this.dialogRef.close('confirm');
  }

  cancel() {
    this.dialogRef.close();
  }
}
