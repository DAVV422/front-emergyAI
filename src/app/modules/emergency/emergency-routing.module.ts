import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmergencyComponent } from './pages/create-emergency/create-emergency.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ListEmergenciesComponent } from './pages/list-emergencies/list-emergencies.component';
import { EmergencyComponent } from './emergency.component';
import { ShowEmergencyComponent } from './pages/show-emergency/show-emergency.component';
import { ShowFormsEmergencyComponent } from './pages/show-forms-emergency/show-forms-emergency.component';

const routes: Routes = [
  {
    path: '',
    component: EmergencyComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListEmergenciesComponent },
      { path: 'new', component:  CreateEmergencyComponent },
      { path: 'edit', component: EditUserComponent },
      { path: 'show/:id', component: ShowEmergencyComponent },
      { path: 'forms/:id', component: ShowFormsEmergencyComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyRoutingModule {}
