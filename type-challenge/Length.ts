const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends readonly any[]> = T['length']

type teslaLength = Length<typeof tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5

const tl: teslaLength = 4
const sl: spaceXLength = 5
