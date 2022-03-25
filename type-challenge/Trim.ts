// type TrimLeft1<S extends string> = S extends `${' '|'\n'|'\t'}${infer SS}` ? TrimLeft<SS> : S
// type TrimRight1<S extends string> = S extends `${infer SS}${' '|'\n'|'\t'}` ? TrimRight1<SS> : S

// type Trim<S extends string> = TrimLeft1<TrimRight1<S>>
// type Trim1<S extends string> = S extends `${' '|'\n'|'\t'}${infer SS}` | `${infer SS}${' '|'\n'|'\t'}` ? Trim1<SS> : S
