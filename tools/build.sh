#!/bin/sh

set -ex

curl -fsSL https://pen-lang.org/favicon.svg >src/icon.svg
npx stencil build --prerender
