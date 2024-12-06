import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import do MatCardModule
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    MatToolbarModule, 
    MatButtonModule
  ],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {}
