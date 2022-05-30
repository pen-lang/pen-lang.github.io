import { Component, Element, h } from "@stencil/core";
import { Router } from "@vaadin/router";

@Component({ tag: "x-root", shadow: true })
export class _ {
  @Element() element!: HTMLElement;

  componentDidLoad() {
    new Router(this.element.shadowRoot?.querySelector("#router")).setRoutes([
      { path: "/", component: "x-home" },
      { path: "(.*)", component: "x-not-found" },
    ]);
  }

  render() {
    return (
      <div>
        <x-header />
        <main>
          <div id="router" />
        </main>
      </div>
    );
  }
}
