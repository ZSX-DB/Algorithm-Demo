type LookUp<U extends { type: unknown }, T extends U['type']> = U extends { type: T } ? U : never

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

const md: MyDog = {
    type: 'dog',
    breeds: 'Hound',
    color: 'brown'
}
