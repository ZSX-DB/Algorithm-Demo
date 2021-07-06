const displayTable = orders => {
    let tables = new Map()
    let foods = new Set()
    orders.forEach(([_, table, food]) => {
        foods.add(food)
        table = Number(table)
        const map = tables.get(table) || new Map()
        map.set(food, (map.get(food) || 0) + 1)
        tables.set(table, map)
    })
    foods = [...foods].sort()
    const firstRow = ['Table', ...foods]
    const elseRow = [...tables]
        .sort((x, y) => Number(x[0]) - Number(y[0]))
        .map(table => {
            const info = Array(foods.length).fill(0)
            const foodInfo = table[1]
            foods.forEach((food, idx) => {
                if (foodInfo.has(food)) {
                    info[idx] = foodInfo.get(food)
                }
            })
            return [table[0], ...info].map(String)
        })
    return [firstRow, ...elseRow]
}

console.log(displayTable([
    ["David", "3", "Ceviche"],
    ["Corina", "10", "Beef Burrito"],
    ["David", "3", "Fried Chicken"],
    ["Carla", "5", "Water"],
    ["Carla", "5", "Ceviche"],
    ["Rous", "3", "Ceviche"]
]))

console.log(displayTable([
    ["James", "12", "Fried Chicken"],
    ["Ratesh", "12", "Fried Chicken"],
    ["Amadeus", "12", "Fried Chicken"],
    ["Adam", "1", "Canadian Waffles"],
    ["Brianna", "1", "Canadian Waffles"]
]))

console.log(displayTable([
    ["Laura", "2", "Bean Burrito"],
    ["Jhon", "2", "Beef Burrito"],
    ["Melissa", "2", "Soda"]
]))
