const destCity = (paths: string[][]): string => {
    const record = new Set(paths.map(path => path[0]))
    for (const [, city] of paths) {
        if (record.has(city) === false) {
            return city
        }
    }
}

console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]))
console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]]))
