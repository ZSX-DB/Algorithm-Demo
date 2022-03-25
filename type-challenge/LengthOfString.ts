type LengthOfStringSimple<S extends string, C extends number[] = []> = S extends `${string}${infer suffix}` ? LengthOfStringSimple<suffix, [...C, 0]> : C['length']

type LengthOfString<S extends string, C extends number[] = []> = S extends `${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${infer suffix}`
    ? LengthOfString<suffix, [...C, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]> : LengthOfStringSimple<S, C>