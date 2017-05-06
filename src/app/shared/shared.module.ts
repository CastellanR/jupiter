import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoginService
      ]
    };
  }
}
