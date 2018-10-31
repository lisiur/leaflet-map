declare function lighten(hexColor: string): string;
declare function darken(hexColor: string): string;
declare function optionsMerge(...targets: any[]): object;
declare const _default: {
    lighten: typeof lighten;
    darken: typeof darken;
    optionsMerge: typeof optionsMerge;
};
export default _default;
export { lighten, darken, optionsMerge };
