import { Component, OnInit, Input } from '@angular/core';

export interface Message {
  text: string;
  type: 'me'|'them';
}

@Component({
  selector: 'chat-config-wizard-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class ChatConfigWizardDialogComponent implements OnInit {

  @Input()
  messages: Array<Message>;

  constructor() {}

  ngOnInit() {}

}
