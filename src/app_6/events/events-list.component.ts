import { EventService } from "./shared/event.service";
import { Component, OnInit } from "@angular/core";
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "events-list",
  template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div class="col-md-6 col-sm-4 col-xs-3" *ngFor="let event of events">
        <event-thumbnail
          [event]="event"
          (click)="clickHandler(event.name)"
        ></event-thumbnail>
      </div>
    </div>
  </div> `,
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private eventService: EventService,
    private toasterService: ToastrService,
    private route: ActivatedRoute
  ) {}
  clickHandler(name) {
    this.toasterService.success(name);
  }
  ngOnInit(): void {
    // before adding resolver to get events we were calling service directly.
    // this.eventService.getEvents().subscribe((response) => {
    //   this.events = response;
    // });
    this.events = this.route.snapshot.data["events"];
  }
}
