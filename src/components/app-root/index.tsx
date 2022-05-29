import { Component, h } from "@stencil/core";

@Component({ tag: "app-root", shadow: true })
export class _ {
  render() {
    return (
      <div>
        <app-header />
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
