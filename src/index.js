const Block = require('./lib/blockchain/Block')
const Blockchain = require('./lib/blockchain/Blockchain')

const aCoin = new Blockchain()
aCoin.addNewBlock(new Block('2018-01-02'), { amount: 10 })
aCoin.addNewBlock(new Block('2018-01-015'), { amount: 10 })

console.log(':::', JSON.stringify(aCoin, null, 4))
