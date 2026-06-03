// Pre-built tree-sitter-c WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: c.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-c/c.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled c.wasm. */
export const wasmPath = path.join(here, "c.wasm");
