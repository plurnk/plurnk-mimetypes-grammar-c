# @plurnk/plurnk-mimetypes-grammar-c

Pre-built `tree-sitter-c` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-c
```

## what's in here

- **`c.wasm`** — pre-built from the pinned upstream [tree-sitter-c](https://github.com/tree-sitter/tree-sitter-c) commit (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `c.wasm` is built from the upstream tree-sitter-c grammar; see the pinned commit for that project's attribution.
