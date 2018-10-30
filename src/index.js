const Block = require('./lib/blockchain/Block')
const Blockchain = require('./lib/blockchain/Blockchain')

const aCoin = new Blockchain()
aCoin.addNewBlock(new Block('2018-01-02'), { amount: 10 })
aCoin.addNewBlock(new Block('2018-01-015'), { amount: 10 })


// console.log('::: aCoin:', aCoin)
// console.log('::: aCoin as a sting:', JSON.stringify(aCoin, null, 4))
console.log('::: is chain valid?', aCoin.isValid())

aCoin.chain[1].data = { amount: 250 }
aCoin.chain[1].hash = aCoin.chain[1].calcHash()
console.log('::: is chain valid?', aCoin.isValid())

// console.log(':::', JSON.stringify(aCoin, null, 4))
