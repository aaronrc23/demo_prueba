import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [BreadcrumbComponent,SidebarComponent,NavbarComponent,RouterOutlet,RouterLink, RouterLinkActive,] ,
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss'
})
export class PlantillaComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite;
  }
}
