export interface ClienteModel {
  id: number,
  nombre: string,
  cif: string,
  direccion: string,
  grupo: number,
}

export interface Grupo {
  id: number,
  nombre: string
}
