import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `<div
    [routerLink]="['/events', event.id]"
    class="well hoverwell thumbnail"
  >
    <h2>{{ event.name }}</h2>
    <div>{{ event.date }}</div>
    <div
      [ngSwitch]="event?.time"
      [ngClass]="{
        green: event?.time === '8:00 am',
        bold: event?.time === '8:00 am'
      }"
    >
      {{ event.time }}
      (<span *ngSwitchCase="'8:00 am'">Early Start</span>
      <span *ngSwitchCase="'10:00 am'">Late Start</span>
      <span *ngSwitchDefault>Normal Start</span>
      )
    </div>
    <div>\${{ event.price }}</div>
    <div *ngIf="event?.location">
      <span>Location: {{ event.location?.address }}</span>
      <span>&nbsp;</span>
      <span>{{ event.location?.city }}, {{ event.location?.country }}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
      <span>Online URL: {{ event.onlineUrl }}</span>
    </div>
  </div>`,
  styles: [
    `
      .green {
        color: green !important;
      }
      .bold {
        font-weight: bold !important;
      }
      .well div {
        color: #bbb;
      }
      .thumbnail {
        min-height: 210px;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;
}
