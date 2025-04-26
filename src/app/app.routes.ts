import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ActivarUsuarioComponent } from './paginas/activar-usuario/activar-usuario.component';
import { RecuperarPasswordComponent } from './paginas/recuperar-password/recuperar-password.component';
import { NuevoPasswordComponent } from './paginas/nuevo-password/nuevo-password.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CrearReporteComponent } from './paginas/crear-reporte/crear-reporte.component';
import { EditarReporteComponent } from './paginas/editar-reporte/editar-reporte.component';
import { VerReporteComponent } from './paginas/ver-reporte/ver-reporte.component';
import { ListarReportesComponent } from './paginas/listar-reportes/listar-reportes.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { HistorialEstadosComponent } from './paginas/historial-estados/historial-estados.component';

export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'activar-usuario', component: ActivarUsuarioComponent },
   { path: 'recuperar-password', component: RecuperarPasswordComponent },
   { path: 'nuevo-password', component: NuevoPasswordComponent },
   { path: 'perfil', component: PerfilComponent },
   { path: 'crear-reporte', component: CrearReporteComponent },
   { path: 'editar-reporte/:id', component: EditarReporteComponent },
   { path: 'reporte/:id', component: VerReporteComponent },
   { path: 'reportes', component: ListarReportesComponent },
   { path: 'categorias', component: CategoriasComponent },
   { path: 'historial-estados/:idReporte', component: HistorialEstadosComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];

