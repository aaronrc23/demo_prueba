import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-add-categorias',
  standalone: true,
  imports: [],
  templateUrl: './add-categorias.component.html',
  styleUrl: './add-categorias.component.scss'
})
export class AddCategoriasComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
