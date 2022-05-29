#!/bin/sh

set -ex

asset_directory=src/assets

mkdir -p $asset_directory
curl -fsSL https://pen-lang.s3.us-west-1.amazonaws.com/icon.svg >$asset_directory/icon.svg
npx stencil build --prerender
