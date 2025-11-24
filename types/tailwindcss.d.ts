declare module 'tailwindcss/lib/util/flattenColorPalette' {
  type NestedColorObject = Record<
    string,
    string | NestedColorObject
  >;

  type FlattenColorPalette = (
    colors: NestedColorObject
  ) => Record<string, string>;

  const flattenColorPalette: FlattenColorPalette;
  export default flattenColorPalette;
}

