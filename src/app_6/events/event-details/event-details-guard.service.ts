import { EventService } from "./../shared/event.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class EventDetailGuardService implements CanActivate {
  constructor(private router: Router, private eventService: EventService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let eventExists = !!this.eventService.getEvent(+route.params["id"]);
    if (!eventExists) {
      this.router.navigate(["/error"]);
    }
    return eventExists;
  }
}
