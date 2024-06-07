import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaDatosComponent } from './shared/tabla-datos/tabla-datos.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto';
import { PlantillaComponent } from './shared/plantilla/plantilla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, ContactoComponent, TablaDatosComponent, PlantillaComponent,
    HttpClientModule, 
    RouterLink, RouterLinkActive],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'clienteAngular';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })
  }
}
