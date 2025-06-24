/* tslint:disable */
/* eslint-disable */
export function init(): void;
/**
 * A struct providing easy to use JS bindings for the `MartinM1` struct
 *
 * TODO: Generalise this type to work with any `impl SSTVMode`
 */
export class SSTVDecoderWASM {
  private constructor();
  free(): void;
  static new(): SSTVDecoderWASM;
  decode(buf: Float32Array): Uint8Array | undefined;
  encode(image: Uint8Array): Uint8Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_sstvdecoderwasm_free: (a: number, b: number) => void;
  readonly sstvdecoderwasm_new: () => number;
  readonly sstvdecoderwasm_decode: (a: number, b: number, c: number) => [number, number];
  readonly sstvdecoderwasm_encode: (a: number, b: number, c: number) => [number, number];
  readonly init: () => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
