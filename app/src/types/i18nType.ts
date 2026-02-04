import en from "../i18n/en";

type NestedKey<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends object
    ? NestedKey<T[K], `${Prefix}${K & string}.`>
    : `${Prefix}${K & string}`;
}[keyof T];

export type TranslationKey = NestedKey<typeof en>;
