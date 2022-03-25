type DropChar<S extends string, C extends string> = S extends `${infer prefix}${C}${infer suffix}` ? DropChar<`${prefix}${suffix}`, C> : S