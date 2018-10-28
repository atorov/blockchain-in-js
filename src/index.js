const delay = require('./lib/delay')

console.log('::: app starts here ...')

const myFunc = async (req) => {
    await req
    console.log('::: resolved!')
}

myFunc(delay(500))
