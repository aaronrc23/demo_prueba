import { Component } from '@angular/core';
import { ListarCategoriasComponent } from '../../Components/categorias/listar-categorias/listar-categorias.component';
import { AddCategoriasComponent } from '../../Components/categorias/add-categorias/add-categorias.component';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ListarCategoriasComponent, AddCategoriasComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  NgONInit() {
    initFlowbite;
  }
}
