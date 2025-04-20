import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

import { Livro } from './livro';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito
  }
}
