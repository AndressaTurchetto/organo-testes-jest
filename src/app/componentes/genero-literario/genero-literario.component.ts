import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroComponent } from '../livro/livro.component';
import { GeneroLiterario } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [
    LivroComponent,
    CommonModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
