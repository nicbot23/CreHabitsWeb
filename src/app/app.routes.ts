import { Routes } from '@angular/router';

// Importamos los componentes de cada página
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlarmsComponent } from './pages/alarms/alarms.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
{ path: '', component: LoginComponent }, // Página de inicio
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alarms', component: AlarmsComponent },
  { path: 'settings', component: SettingsComponent },
];
