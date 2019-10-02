import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { NgModule } from '@angular/core';
import { FfTestPageComponent } from './ff-test-page.component';
import { JokeService } from './joke.service';

const routes: Routes = [Shell.childRoutes([{ path: 'ff-test', component: FfTestPageComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JokeService]
})
export class FfTestPageRoutingModule {}
