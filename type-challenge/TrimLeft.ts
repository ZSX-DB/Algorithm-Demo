// type TrimLeft<S extends string> = S extends `${' '|'\n'|'\t'}${infer SS}` ? TrimLeft<SS> : S

// type HW = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
