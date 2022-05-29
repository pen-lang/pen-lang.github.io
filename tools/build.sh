#!/bin/sh

set -ex

asset_directory=src/assets

mkdir -p $asset_directory
curl -fsSL https://pen-lang.org/favicon.svg >$asset_directory/icon.svg
npx stencil build --prerender
