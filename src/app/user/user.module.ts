import { ProfileComponent } from "./profile.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { userRoutes } from "./user.routes";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule {}
