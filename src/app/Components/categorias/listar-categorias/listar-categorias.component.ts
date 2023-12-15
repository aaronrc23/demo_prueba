import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.scss'
})
export class ListarCategoriasComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite;
  }
}
