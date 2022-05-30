import { Component, h } from "@stencil/core";

@Component({ tag: "x-not-found", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div class="container">
        <p>Page not found!</p>
      </div>
    );
  }
}
