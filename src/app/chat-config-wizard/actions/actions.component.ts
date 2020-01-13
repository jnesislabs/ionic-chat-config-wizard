import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
 } from '@angular/core';
import { ChatConfigWizardActionComponent } from '../action/action.component';

@Component({
  selector: 'chat-config-wizard-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ChatConfigWizardActionsComponent implements AfterContentInit {

  @ContentChildren(ChatConfigWizardActionComponent) actions: QueryList<ChatConfigWizardActionComponent>;

  constructor() { }

  ngAfterContentInit() {
    const activeAction = this.actions.toArray().find(a => a.active);

    if (!activeAction) {
      this.showAction(this.actions.first);
    }
  }

  showAction(action: ChatConfigWizardActionComponent) {
    this.actions.toArray().forEach(a => a.active = false);
    action.active = true;
  }

}
