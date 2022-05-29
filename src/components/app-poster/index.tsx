import { Component, h } from "@stencil/core";

@Component({ tag: "app-poster", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div>
        <h2>
          Pen is the programming language for <b>scalable</b> development
        </h2>
      </div>
    );
  }
}
