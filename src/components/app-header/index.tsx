import { Component, h } from "@stencil/core";

@Component({ tag: "app-header", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <header>
        <h1>Pen programming language</h1>
      </header>
    );
  }
}
