import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatConfigWizardDialogComponent } from './dialog/dialog.component';
import { ChatConfigWizardActionsComponent } from './actions/actions.component';
import { ChatConfigWizardActionComponent } from './action/action.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    ChatConfigWizardDialogComponent,
    ChatConfigWizardActionsComponent,
    ChatConfigWizardActionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ChatConfigWizardDialogComponent,
    ChatConfigWizardActionsComponent,
    ChatConfigWizardActionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatConfigWizardModule { }
