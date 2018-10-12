# maidfile

## build

Build this project using webpack.

```bash
set -ex
export TS_NODE_PROJECT="./tsconfig.webpack.json"
webpack --config ./webpack.config.ts --mode production "$@"
```

## dev

Run `webpack-dev-server`.

```bash
set -ex
export TS_NODE_PROJECT="./tsconfig.webpack.json"
webpack-dev-server --config ./webpack.config.ts "$@"
```

## typecheck

Run TypeScript compiler to this project without transpiling.

```bash
set -ex
tsc -p . --noEmit "$@"
```

## lint

Check code format.

When it runs with `--fix` option, it fix code format instead linting.

```bash
if [[ $1 = --fix ]]; then
  PRETTIER_OPT=--write
else
  PRETTIER_OPT=--list-different
fi
set -ex
prettier-package-json $PRETTIER_OPT
prettier --ignore-path ./.gitignore $PRETTIER_OPT '**/*.{json,md,ts}'
```
