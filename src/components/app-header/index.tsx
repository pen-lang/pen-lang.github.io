import { Component, h } from "@stencil/core";

@Component({ tag: "app-header", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <header>
        <h1>
          <a href="/">Pen programming language</a>
        </h1>
        <div class="links">
          <a href="https://doc.pen-lang.org">Documentation</a>
        </div>
      </header>
    );
  }
}
