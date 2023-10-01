import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponent } from './components/list/list.component';

const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ] },
  { path: 'new-character', loadChildren: './components/create-character/create-character.module' },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
