import { Component, h } from "@stencil/core";

@Component({ tag: "app-root", styleUrl: "index.css", shadow: true })
export class _ {
  render() {
    return (
      <div>
        <header>
          <h1>Pen programming language</h1>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch>
              <stencil-route url="/" exact={true} component="app-home" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
