import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.scss']
})
export class EleccionesComponent {

    "opciones" = [
    { "valor": "opcion1", "texto": "Opción 1" },
    { "valor": "opcion2", "texto": "Opción 2" },
    { "valor": "opcion3", "texto": "Opción 3" }
  ]
  
  departamentos = ['Huila'];
  municipios = ['Aipe', 'Algeciras', 'Baraya', 'Campoalegre', 'Colombia', 
                'Hobo', 'Íquira', 'Neiva', 'Palermo', 'Rivera', 'Santa Maria',
                'Tello', 'Teruel', 'Villavieja', 'Yaguará', 'Agrado', 'Altamira',
                'Garzón', 'Gigante', 'Guadalupe', 'Pital', 'Suaza', 'Tarqui', 
                'La Argentina', 'La Plata', 'Nátaga', 'Pailcol', 'Tesalia',
                'Acevedo', 'Elías', 'Isnos', 'Oporapa', 'Palestina', 'Pitalito',
                'Salado Blanco', 'San Agustín', 'Timaná'   
              ];
  formularioData = {
    departamento: '',
    municipio: '',
    lugar: '',
    zona: '',
    puesto: '',
    mesa: ''
  };

  submitForm() {
    console.log(this.formularioData);
    this.formularioData = {
      departamento: '',
      municipio: '',
      lugar: '',
      zona: '',
      puesto: '',
      mesa: ''
    };
  }

  // constructor(private http: HttpClient) {
  //   this.http.get('ruta/a/tu/archivo.json').subscribe(data => {
  //     this.opciones = data.opciones;
  //   });
  // }

}
