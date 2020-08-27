import { EventListResolverService } from "./events/events-list-resolver.service";
import { EventDetailGuardService } from "./events/event-details/event-details-guard.service";
import { Error404Component } from "./error/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { ToastrService } from "./common/toastr.service";
import { EventService } from "./events/shared/event.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/nav-bar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { RouterModule } from "@angular/router";
import { app_routes } from "./routes";
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(app_routes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventDetailGuardService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyForm },
    EventListResolverService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyForm(comp: CreateEventComponent) {
  if (comp.isFormDirty) {
    return window.confirm("Changes made, do you still want to exit?");
  }
  return true;
}
