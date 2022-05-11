const prices: (number|string)[] = [10, 20, 30,'kevin'];
prices.push(40)
prices.push(50)
prices.push(60)

let user: [string , number, boolean]
// user = ['juan', 20]
// user = ['10', 20]

// user = []
// user = ['kevin']
// user = ['kevin',24]
user = ['kevin',24, true]
const [username, age] = user // destructuracion de una tupla

console.log(username)
console.log(age)