import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
 } from '@angular/core';
import { ChatConfigWizardActionComponent } from '../action/action.component';
import { Subject } from 'rxjs';

export interface ActionTransition {
  transitionType: 'before' | 'after';
  actionName: string;
  data?: any;
}

@Component({
  selector: 'chat-config-wizard-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ChatConfigWizardActionsComponent implements AfterContentInit, OnChanges, OnDestroy {  
  
  @Output() onActionTransition = new EventEmitter<ActionTransition>();
  @Input() action : string; 
  @ContentChildren(ChatConfigWizardActionComponent) actions: QueryList<ChatConfigWizardActionComponent>;

  private onChanges = new Subject<SimpleChanges>();

  constructor() { }

  ngAfterContentInit() {
    this.onChanges.subscribe((changes:SimpleChanges)=>{
      this.showActionByName(changes.action.currentValue);
    });
    this.showActionByName(this.action);
  }

  ngOnDestroy(): void {
    this.onChanges.complete();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onChanges.next(changes);
  }

  showActionByName(actionName: string) {
    const foundAction = this.actions.toArray().find(a => a.name == actionName);
    if (foundAction) this.showAction(foundAction);
  }

  showAction(action: ChatConfigWizardActionComponent) {
    this.actions.toArray().forEach(a => a.active = false);
    action.active = true;
    this.onActionTransition.emit({
      transitionType: 'before',
      actionName: action.name
    });
  }

  submitAction(event: any, data: any) {
    const actionRef = event.target.closest('chat-config-wizard-action');
    const sourceAction = (actionRef) ? actionRef.getAttribute('name') : null;
    this.onActionTransition.emit({
      transitionType: 'after',
      actionName: sourceAction, 
      data
    });
  }

}
