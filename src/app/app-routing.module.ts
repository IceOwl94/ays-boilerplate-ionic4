import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShellComponent} from './components/shell/shell.component';
import {SettingsComponent} from './components/settings/settings.component';
import {CallerComponent} from './components/caller/caller.component';
import {CalleeComponent} from './components/callee/callee.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, data: {name: 'Home'}},
      {path: 'settings', component: SettingsComponent, data: {name: 'Settings'}}
    ]
  },
  {
    path: 'caller', pathMatch: 'full', component: CallerComponent
  },
  {
    path: 'callee', pathMatch: 'full', component: CalleeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
