import { Component, Input } from '@angular/core';
import {Message} from './dialog.model';

@Component({
  selector: 'chat-config-wizard-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class ChatConfigWizardDialogComponent {
  @Input()  messages: Array<Message>;

  constructor() {}
}
