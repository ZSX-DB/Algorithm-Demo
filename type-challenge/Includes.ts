type Includes<T extends readonly any[], U> = {
    [K in T[number]]: true
}[U] extends true ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
const ip: isPillarMen = false
