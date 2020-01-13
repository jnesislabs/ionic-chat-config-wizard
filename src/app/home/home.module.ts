import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatConfigWizardDialogComponent } from '../chat-config-wizard/dialog/dialog.component';
import { ChatConfigWizardActionsComponent } from '../chat-config-wizard/actions/actions.component';
import { ChatConfigWizardActionComponent } from '../chat-config-wizard/action/action.component';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ChatConfigWizardDialogComponent, ChatConfigWizardActionsComponent, ChatConfigWizardActionComponent]
})
export class HomePageModule {}
