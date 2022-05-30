import { Component, h } from "@stencil/core";

@Component({ tag: "app-poster", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div>
        <h1>
          Pen is the programming language for <b>scalable</b> development
        </h1>
      </div>
    );
  }
}
