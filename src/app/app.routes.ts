import { Routes } from '@angular/router';
import { PlantillaComponent } from './Components/plantilla/plantilla.component';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { LogueoComponent } from './Components/login/logueo/logueo.component';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LogueoComponent,
  },
  { path: 'plantillas', component: PlantillaComponent , children:[
    {path: 'categoria',component: CategoriaComponent}
  ]},
];
