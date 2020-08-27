import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  template: `<div>
    <button class="btn" (click)="cancel()">Save</button>
    <button class="btn btn-primary" (click)="cancel()">Cancel</button>
  </div>`,
})
export class CreateEventComponent {
  isFormDirty: boolean = true; // dummy form state.
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(["./events"]);
  }
}
