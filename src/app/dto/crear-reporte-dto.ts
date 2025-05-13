import { UbicacionDTO } from "./ubicacion-dto";

export interface CrearReporteDTO {
    titulo: string,
    descripcion: string,
    ubicacio: UbicacionDTO,
    ciudad: string,
    imagenes: string[],
    categoria: string
}
