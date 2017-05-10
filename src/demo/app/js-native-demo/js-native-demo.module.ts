import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { JSNativeModalModule } from 'single-angular-modal/plugins/js-native';

import { routing } from './js-native-demo.routes';
import { JSNativeDemo } from './js-native-demo';

@NgModule({
  imports: [ CommonModule, JSNativeModalModule, routing, SharedModule ],
  declarations: [ JSNativeDemo ]
})
export class JSNativeDemoModule { }
