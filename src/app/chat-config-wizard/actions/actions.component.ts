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
import { ActionTransition } from './actions.model';

@Component({
  selector: 'chat-config-wizard-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ChatConfigWizardActionsComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Output() actionTransition: EventEmitter<ActionTransition> = new EventEmitter<ActionTransition>();
  @Input() action: string;
  @ContentChildren(ChatConfigWizardActionComponent) actions: QueryList<ChatConfigWizardActionComponent>;

  private onChanges = new Subject<SimpleChanges>();

  constructor() { }

  ngAfterContentInit(): void {
    this.onChanges.subscribe((changes: SimpleChanges) => {
      this.showActionByName(changes.action.currentValue);
    });
    this.showActionByName(this.action);
  }

  ngOnDestroy(): void {
    this.onChanges.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges.next(changes);
  }

  showActionByName(actionName: string): void {
    const foundAction = this.actions.toArray().find(a => a.name === actionName);
    if (foundAction) { this.showAction(foundAction); }
  }

  showAction(action: ChatConfigWizardActionComponent): void {
    this.actions.toArray().forEach(a => a.active = false);
    action.active = true;
    this.actionTransition.emit({
      transitionType: 'before',
      actionName: action.name
    });
  }

  submitAction(event: any, data: any): void {
    const actionRef = event.target.closest('chat-config-wizard-action');
    const sourceAction = (actionRef) ? actionRef.getAttribute('name') : null;
    this.actionTransition.emit({
      transitionType: 'after',
      actionName: sourceAction,
      data
    });
  }
}
