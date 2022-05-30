import { Component, h } from "@stencil/core";

@Component({ tag: "x-code", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <pre>
        <code>
          <slot />
        </code>
      </pre>
    );
  }
}
