import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `<div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>{{ event.date }}</div>
    <div>{{ event.time }}</div>
    <div>\${{ event.price }}</div>
    <div>
      <span>{{ event.location.address }}</span>
      <span>&nbsp;</span>
      <span>{{ event.location.city }}, {{ event.location.country }}</span>
    </div>
    <button class="btn btn-primary">Save</button>
  </div>`,
  styles: [
    `
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;
}
