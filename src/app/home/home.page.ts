import { Component } from '@angular/core';
import { Message } from '../chat-config-wizard/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public messages: Array<Message> = [];

  constructor() {

    this.messages = [{
      text: 'Pwet',
      type: 'them'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      type: 'them'
    }, {
      text: 'Lorem ipsum',
      type: 'me'
    }, {
      text: 'Cowabunga',
      type: 'them'
    }, {
      text: 'Hello brah',
      type: 'me'
    }, {
      text: 'WTF !',
      type: 'me'
    },{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      type: 'me'
    }];
  }

}
