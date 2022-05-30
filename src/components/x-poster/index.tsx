import { Component, h } from "@stencil/core";

const exampleCode = `
import Os'Context { Context }
import Os'File
import Os'Process

sayHello = \\(ctx Context) none | error {
  File'Write(ctx, File'StdOut(), "Hello, world!\\n")?

  none
}

main = \\(ctx context) none {
  e = sayHello(ctx.Os)

  if _ = e as none {
    none
  } else if error {
    Process'Exit(ctx.Os, 1)
  }
}
`;

@Component({ tag: "x-poster", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div class="container">
        <div>
          <h1>
            Pen is the programming language for <b>scalable</b> development
          </h1>
        </div>
        <div>
          <x-code>{exampleCode}</x-code>
        </div>
      </div>
    );
  }
}
