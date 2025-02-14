import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { NativeScriptCommonModule } from '@nativescript/angular';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
