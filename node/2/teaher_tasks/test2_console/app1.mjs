//знайти суму переданих через параметри чисел
// console.log(process.argv.slice(2)) //масив параметрів
const args = process.argv.slice(2)
const sum = args.map((el) => parseInt(el)).reduce((prevSum, el) => prevSum + el)
console.log(`Sum = ${sum}`)
