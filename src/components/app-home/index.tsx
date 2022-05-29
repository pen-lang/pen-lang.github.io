import { Component, h } from "@stencil/core";

@Component({ tag: "app-home", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div class="container">
        <p>Hello, world!</p>
      </div>
    );
  }
}
