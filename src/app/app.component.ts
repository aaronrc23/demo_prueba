import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front_sysdatav1';
  // ngOnInit(): void {
  //   initFlowbite();
  // }
  ngOnInit(): void {
      
  }
}
