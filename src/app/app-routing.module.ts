import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShellComponent} from './components/shell/shell.component';
import {SettingsComponent} from './components/settings/settings.component';
import {HomeComponent} from './components/home/home.component';
import {AnotherRootComponent} from './components/another-root/another-root.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, data: {name: 'Home'}},
      {path: 'settings', component: SettingsComponent, data: {name: 'Settings'}}
    ]
  },
  {
    path: 'another-root', component: AnotherRootComponent, data: {name: 'Another Root'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
