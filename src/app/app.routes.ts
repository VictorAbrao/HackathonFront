import { Routes } from '@angular/router';
import { KeywordsListComponent } from './features/keywords/pages/keywords-list/keywords-list.component';
import { KeywordFormComponent } from './features/keywords/pages/keyword-form/keyword-form.component';
import { ConciergeListComponent } from './features/concierge/pages/concierge-list/concierge-list.component';
import { ConciergeFormComponent } from './features/concierge/pages/concierge-form/concierge-form.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'keywords', pathMatch: 'full' },
  { path: 'keywords', component: KeywordsListComponent },
  { path: 'keywords/new', component: KeywordFormComponent },
  { path: 'keywords/:id/edit', component: KeywordFormComponent },
  { path: 'concierge', component: ConciergeListComponent },
  { path: 'concierge/:id/edit', component: ConciergeFormComponent },
  { path: '**', redirectTo: 'keywords' }
];

