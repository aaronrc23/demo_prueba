import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import {
  faGauge,
  faBoxes,
  faLayerGroup,
  faUnderline,
  faTruck,
  faAngleDown,
  faPersonCirclePlus,
  faCirclePlus,
  faFileCirclePlus,
  faBoxesPacking,
  faFilePen,
  faFileCircleExclamation,
  faFileCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,RouterOutlet,RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  faGauge = faGauge;
  faBoxes = faBoxes;
  faLayerGroup = faLayerGroup;
  faUnderline = faUnderline;
  faTruck = faTruck;
  faAngleDown = faAngleDown;
  faPersonCirclePlus = faPersonCirclePlus;
  faCirclePlus = faCirclePlus;
  faFileCirclePlus = faFileCirclePlus;
  faBoxesPacking = faBoxesPacking;
  faFilePen = faFilePen;
  faFileCircleExclamation = faFileCircleExclamation;
  faFileCircleCheck = faFileCircleCheck;
  dropdownStates: boolean[] = [false, false];



  sidebarVisible = true;

  ngOnInit(): void {
    initFlowbite;
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
