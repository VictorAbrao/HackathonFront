import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConciergeApproveDenyDialogComponent } from '../concierge-approve-deny-dialog/concierge-approve-deny-dialog.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ConciergeItem } from '../../../../core/models/concierge.model';
import { ConciergeService } from '../../../../core/services/concierge.service';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatDialogModule,
    ReactiveFormsModule
  ],
  selector: 'app-concierge-list',
  templateUrl: './concierge-list.component.html',
  styleUrls: ['./concierge-list.component.scss']
})
export class ConciergeListComponent implements OnInit {
  displayedColumns = ['id', 'title', 'uf', 'status', 'actions'];
  dataSource: ConciergeItem[] = [];
  ufFilter = new FormControl('');
  titleFilter = new FormControl('');

  constructor(private conciergeService: ConciergeService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadConcierge();
  }

  loadConcierge() {
    const uf = this.ufFilter.value || '';
    const title = this.titleFilter.value || '';
    this.conciergeService.getConcierge(uf, undefined, title).subscribe((res: { items: ConciergeItem[]; }) => {
      this.dataSource = res.items;
    });
  }

  editConcierge(c: ConciergeItem) {
    this.router.navigate(['/concierge', c.id, 'edit']);
  }

  approveOrDeny(c: ConciergeItem) {
    const dialogRef = this.dialog.open(ConciergeApproveDenyDialogComponent, {
      data: c,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'approve') {
        this.conciergeService.approveConcierge(c.id).subscribe(() => this.loadConcierge());
      } else if (result === 'deny') {
        this.conciergeService.denyConcierge(c.id).subscribe(() => this.loadConcierge());
      }
    });
  }
}
