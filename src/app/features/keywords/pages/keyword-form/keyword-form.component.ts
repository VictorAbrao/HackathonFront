import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { KeywordsService } from '../../../../core/services/keywords.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatCardModule
  ],
  selector: 'app-keyword-form',
  templateUrl: './keyword-form.component.html',
  styleUrls: ['./keyword-form.component.scss']
})
export class KeywordFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private keywordService = inject(KeywordsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);

  id?: number;
  form = this.fb.group({
    uf: [''],
    word: [''],
    subWords: ['']
  });

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.keywordService.getKeywordById(this.id).subscribe(k => {
        this.form.patchValue({
          uf: k.uf,
          word: k.word,
          subWords: k.subWords.join(', ')
        });
      });
    }
  }

  save() {
    const val = this.form.value;
    const keyword = {
      uf: val.uf ?? '',
      word: val.word ?? '',
      subWords: (val.subWords ?? '').split(',').map(s => s.trim()).filter(s => s)
    };
    if (this.id) {
      this.keywordService.updateKeyword(this.id, keyword).subscribe(() => {
        this.router.navigate(['/keywords']);
      });
    } else {
      this.keywordService.createKeyword(keyword).subscribe(() => {
        this.router.navigate(['/keywords']);
      });
    }
  }

  cancel() {
    this.location.back();
  }
}
