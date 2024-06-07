import { Routes } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaDatosComponent } from './shared/tabla-datos/tabla-datos.component';
import { PlantillaComponent } from './shared/plantilla/plantilla.component';
import { AlbumComponent } from './shared/album/album.component';

export const routes: Routes = [
    { path: 'contacto-component', component: ContactoComponent},
    { path: 'tabla-datos-component', component: TablaDatosComponent },
    { path: 'plantilla-component', component: PlantillaComponent},
    { path: 'album-component', component: AlbumComponent}
];