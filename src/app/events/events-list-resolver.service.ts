import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(
      map((events) => {
        return events;
      })
    );
  }
}
