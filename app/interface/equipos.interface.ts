export class EquiposI {
  id: number;
  nombre: string;
  estadio: string;
  sitioWeb: string;
  nacionalidad: string;
  fundacion: Date;
  entrenador: string;
  capacidad: number
  valor: number;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.estadio = '';
    this.sitioWeb = '';
    this.nacionalidad = '';
    this.fundacion = new Date();
    this.entrenador = '';
    this.capacidad = 0;
    this.valor = 0;
  }
}

