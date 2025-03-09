import { Routes } from '@angular/router';

// Importamos los componentes de cada página
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlarmsComponent } from './pages/alarms/alarms.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LayoutComponent } from './pages/layout/layout.component';
//import { AuthGuard } from './auth.guard';

// export const routes: Routes = [
//     { path: 'login', component: LoginComponent },
//     { path: 'alarmas', component: AlarmsComponent, canActivate: [AuthGuard] },
//     { path: '**', redirectTo: 'login' } // Redirig
// { path: 'login', component: LoginComponent }, // Página de inicio
// {
//     path: '', 
//     component: LayoutComponent,
//     children: [
//         { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
//         { path: 'alarmas', component: AlarmsComponent, canActivate: [AuthGuard]},
//         { path: 'configuracion', component: SettingsComponent, canActivate: [AuthGuard]},
//         { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     ],
// },
  
//];
export const routes: Routes = [
    { path: 'login', component: LoginComponent }, // Página de login SIN layout
    { path: 'register', component: RegisterComponent },
    {
      path: '', // Grupo de rutas con Layout
      component: LayoutComponent, // Este es el contenedor
      //canActivate: [AuthGuard], // Protegemos con AuthGuard si es necesario
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'alarmas', component: AlarmsComponent },
        { path: 'configuracion', component: SettingsComponent }
      ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
 // Redirección si la ruta no existe
  
];