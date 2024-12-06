import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { KeywordDeleteDialogComponent } from '../keyword-delete-dialog/keyword-delete-dialog.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { KeywordsService } from '../../../../core/services/keywords.service';
import { Keyword } from '../../../../core/models/keyword.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  selector: 'app-keywords-list',
  templateUrl: './keywords-list.component.html',
  styleUrls: ['./keywords-list.component.scss']
})
export class KeywordsListComponent implements OnInit {
  displayedColumns = ['id', 'word', 'uf', 'actions'];
  dataSource: Keyword[] = [];
  wordFilter = new FormControl('');
  ufFilter = new FormControl('');

  constructor(private keywordsService: KeywordsService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadKeywords();
  }

  loadKeywords() {
    const uf = this.ufFilter.value || '';
    const word = this.wordFilter.value || '';
    this.keywordsService.getKeywords(uf, word).subscribe((res: { items: Keyword[]; }) => {
      this.dataSource = res.items;
    });
  }

  editKeyword(k: Keyword) {
    this.router.navigate(['/keywords', k.id, 'edit']);
  }

  deleteKeyword(k: Keyword) {
    const dialogRef = this.dialog.open(KeywordDeleteDialogComponent, {
      data: k
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.keywordsService.deleteKeyword(k.id!).subscribe(() => {
          this.loadKeywords();
        });
      }
    });
  }
}
