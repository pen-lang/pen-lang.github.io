import { Component, h } from "@stencil/core";

@Component({ tag: "x-home", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div class="container">
        <x-poster />
      </div>
    );
  }
}
