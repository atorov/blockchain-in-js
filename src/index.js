const Block = require('./lib/blockchain/Block')
const Blockchain = require('./lib/blockchain/Blockchain')

const aCoin = new Blockchain()

// console.log('::: Mining block #1')
aCoin.addNewBlock(new Block({ amount: 10 }))

// console.log('::: Mining block #1')
aCoin.addNewBlock(new Block({ amount: 20 }))

console.log(':::', JSON.stringify(aCoin, null, 4))
console.log('::: is chain valid:', aCoin.isValid())
