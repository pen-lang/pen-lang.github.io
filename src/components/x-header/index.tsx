import { Component, h } from "@stencil/core";

@Component({ tag: "x-header", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <header>
        <h1>
          <stencil-route-link anchorClass="title" url="/">
            Pen programming language
          </stencil-route-link>
        </h1>
        <div class="links">
          <a href="https://pen-lang.org">Documentation</a>
        </div>
      </header>
    );
  }
}
