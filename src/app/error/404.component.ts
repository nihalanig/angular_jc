import { Component } from "@angular/core";

@Component({
  template: `<div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1 class="error">Error 404</h1>
        <br />
        <h4>Resource not found!</h4>
      </div>
    </div>
  </div>`,
  styles: [
    `
      .error {
        color: red;
        text-align: center;
      }
    `,
  ],
})
export class Error404Component {}
