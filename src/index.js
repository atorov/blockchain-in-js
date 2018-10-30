const Blockchain = require('./lib/blockchain/Blockchain')
const Transact = require('./lib/blockchain/Transact')

const aCoin = new Blockchain()
aCoin.createTransact(new Transact('addr1', 'addr2', 100))
aCoin.createTransact(new Transact('addr2', 'addr1', 50))

console.log('::: addr1 balance:', aCoin.getBalanceOfAddr('addr1'))
console.log('::: addr2 balance:', aCoin.getBalanceOfAddr('addr2'))
console.log('::: My balance:', aCoin.getBalanceOfAddr('myAddr'))

console.log('::: Launch the miner...')
aCoin.minePendingTransacts('myAddr')
console.log('::: addr1 balance:', aCoin.getBalanceOfAddr('addr1'))
console.log('::: addr2 balance:', aCoin.getBalanceOfAddr('addr2'))
console.log('::: My balance:', aCoin.getBalanceOfAddr('myAddr'))

console.log('::: Launch the miner again...')
aCoin.minePendingTransacts('myAddr')
console.log('::: addr1 balance:', aCoin.getBalanceOfAddr('addr1'))
console.log('::: addr2 balance:', aCoin.getBalanceOfAddr('addr2'))
console.log('::: My balance:', aCoin.getBalanceOfAddr('myAddr'))

// console.log('::: aCoin chain:', JSON.stringify(aCoin, null, 4))
console.log('::: is chain valid:', aCoin.isValid())
