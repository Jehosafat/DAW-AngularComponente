import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from '../../interfaz/foto';
import { ContactoComponent } from '../contacto/contacto.component';
import { TablaDatosComponent } from '../tabla-datos/tabla-datos.component';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [ContactoComponent, TablaDatosComponent,HttpClientModule],
  providers: [RecursosService],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent {
  title = 'clienteAngular';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })
  }
}