import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class ConversationsService {
  user: Observable<any>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  }

  getConversation(conversationKey: string) {
    return this.af.list('/messages/' + conversationKey);
  }

}
