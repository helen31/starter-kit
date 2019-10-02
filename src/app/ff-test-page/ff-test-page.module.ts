import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfTestPageComponent } from './ff-test-page.component';
import { FfTestPageRoutingModule } from './ff-test-page-routing.module';
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  declarations: [FfTestPageComponent, JokeListComponent],
  imports: [CommonModule, FfTestPageRoutingModule]
})
export class FfTestPageModule {}
