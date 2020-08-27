import { EventListResolverService } from "./events/events-list-resolver.service";
import { Error404Component } from "./error/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailGuardService } from "./events/event-details/event-details-guard.service";
export const app_routes: Routes = [
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: "events/new",
    canDeactivate: ["canDeactivateCreateEvent"],
    component: CreateEventComponent,
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventDetailGuardService],
  },
  { path: "error", component: Error404Component },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full",
  },
];
