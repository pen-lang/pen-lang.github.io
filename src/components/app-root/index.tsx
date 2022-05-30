import { Component, Element, h } from "@stencil/core";
import { Router } from "@vaadin/router";

@Component({ tag: "app-root", shadow: true })
export class _ {
  @Element() element!: HTMLElement;

  componentDidLoad() {
    new Router(this.element.shadowRoot?.querySelector("#router")).setRoutes([
      { path: "/", component: "app-home" },
      { path: "(.*)", component: "app-not-found" },
    ]);
  }

  render() {
    return (
      <div>
        <app-header />
        <main>
          <div id="router" />
        </main>
      </div>
    );
  }
}
