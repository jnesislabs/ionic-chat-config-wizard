import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-config-wizard-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ChatConfigWizardActionComponent {
  @Input() active = false;
  @Input() name: string;

  constructor() { }
}
