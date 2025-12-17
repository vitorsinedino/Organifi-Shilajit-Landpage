// Swiper's CSS entry points don't ship type declarations.
// With `noUncheckedSideEffectImports: true`, TypeScript requires declarations
// for these side-effect imports.

declare module 'swiper/css' {
  const css: unknown;
  export default css;
}

declare module 'swiper/css/*' {
  const css: unknown;
  export default css;
}
