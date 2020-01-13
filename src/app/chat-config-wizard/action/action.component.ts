import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-config-wizard-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ChatConfigWizardActionComponent implements OnInit {

  @Input() active = false;

  constructor() { }

  ngOnInit() {}

}
