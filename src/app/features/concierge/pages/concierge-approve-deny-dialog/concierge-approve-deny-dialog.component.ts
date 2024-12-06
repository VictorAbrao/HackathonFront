import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ConciergeItem } from '../../../../core/models/concierge.model';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  selector: 'app-concierge-approve-deny-dialog',
  templateUrl: './concierge-approve-deny-dialog.component.html',
  styleUrls: ['./concierge-approve-deny-dialog.component.scss']
})
export class ConciergeApproveDenyDialogComponent implements OnInit {
  formattedBody: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConciergeItem,
    private dialogRef: MatDialogRef<ConciergeApproveDenyDialogComponent>
  ) {}

  ngOnInit() {
    // formatar o HTML do body, por exemplo substituindo tags, etc.
    // Aqui só atribuímos diretamente:
    this.formattedBody = this.data.body;
  }

  approve() {
    this.dialogRef.close('approve');
  }

  deny() {
    this.dialogRef.close('deny');
  }

  close() {
    this.dialogRef.close();
  }
}
