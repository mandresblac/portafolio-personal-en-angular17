import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';

export const routes: Routes = [
  {
    path: '', 
    title: "home", 
    component: HomeComponent
  },
  {
    path: 'sobremi', 
    title: "sobre mí", 
    component: SobreMiComponent
  },
  {
    path: 'proyectos', 
    title: "proyectos", 
    component: ProyectosComponent
  },
  {
    path: 'testimonios', 
    title: "testimonios", 
    component: TestimoniosComponent
  },
  {
    path: 'contacto', 
    title: "contacto", 
    component: ContactoComponent
  },
  {path: "**", redirectTo: "", pathMatch: "full"}
];
