import { Config } from "@stencil/core";

export const config: Config = {
  globalStyle: "src/index.css",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "https://www.pen-lang.org/",
    },
  ],
};
