import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-logueo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive  ],
  templateUrl: './logueo.component.html',
  styleUrl: './logueo.component.scss'
})
export class LogueoComponent {

}
