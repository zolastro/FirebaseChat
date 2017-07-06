import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConversationComponent } from './conversations/conversations.component';

const routes: Routes = [
  { path: '',  component: AppComponent },
  { path: 'contacts',  component: ContactsComponent },
  { path: 'conversations/:id',  component: ConversationComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
