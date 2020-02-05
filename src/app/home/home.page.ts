import { Component } from '@angular/core';
import { ActionTransition } from '../chat-config-wizard/actions/actions.component';
import { DatePipe } from '@angular/common';
import {Message} from '../chat-config-wizard/dialog/dialog.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe],
})
export class HomePage {

  public currentAction = 'name';
  public messages: Array<Message> = [];

  constructor(private datePipe: DatePipe) {
    this.messages = [{
      text: 'Hi, I hope you\'re having a good day',
      type: 'them'
    }];
  }

  public onActionTransition(transition: ActionTransition): void {
    switch (transition.actionName) {
      case 'name':
        this[`${transition.transitionType}NameAction`](transition);
        break;
      case 'birthdate':
        this[`${transition.transitionType}BirthdateAction`](transition);
        break;
    }
  }

  private beforeNameAction(action): void {
    this.messages.push({
      text: 'Could you please tell me your name ?',
      type: 'them'
    });
  }

  private afterNameAction(action): void {
    const name = action.data;
    this.messages.push({
      text: `My name is ${name}`,
      type: 'me'
    });
    this.messages.push({
      text: `Nice to meet you ${name}`,
      type: 'them'
    });
    this.currentAction = 'birthdate';
  }

  private beforeBirthdateAction(action): void {
    this.messages.push({
      text: 'Could you please indicate your birthdate ?',
      type: 'them'
    });
  }

  private afterBirthdateAction(action): void {
    const birthdate = new Date(action.data);
    const formattedBirthdate = this.datePipe.transform(birthdate, 'mediumDate');
    const age = this.getAge(birthdate);

    this.messages.push({
      text: `I was born on ${formattedBirthdate}`,
      type: 'me'
    });
    this.messages.push({
      text: `${age} years old, you're in the prime of life !`,
      type: 'them'
    });
    this.currentAction = 'end';
  }

  private getAge(birthdate): number {
    const diff = new Date(Date.now() - birthdate.getTime());
    return Math.abs(diff.getUTCFullYear() - 1970);
  }

}
