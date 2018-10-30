const Blockchain = require('./lib/blockchain/Blockchain')
const Transact = require('./lib/blockchain/Transact')

function getRandomAmount(reward) {
    return Math.round(Math.random() * 2 - 1 * reward)
}

const aCoin = new Blockchain()
aCoin.createTransact(new Transact(null, 'addr1', aCoin.miningReward * 10))
aCoin.createTransact(new Transact(null, 'addr2', aCoin.miningReward * 10))
aCoin.createTransact(new Transact(null, 'myAddr', aCoin.miningReward * 10))

for (let i = 0; i < 100; i++) {
    aCoin.createTransact(new Transact('addr1', 'addr2', getRandomAmount(aCoin.miningReward)))
    aCoin.createTransact(new Transact('addr1', 'myAddr', getRandomAmount(aCoin.miningReward)))

    aCoin.createTransact(new Transact('addr2', 'addr1', getRandomAmount(aCoin.miningReward)))
    aCoin.createTransact(new Transact('addr2', 'myAddr', getRandomAmount(aCoin.miningReward)))

    aCoin.createTransact(new Transact('myAddr', 'addr1', getRandomAmount(aCoin.miningReward)))
    aCoin.createTransact(new Transact('myAddr', 'addr2', getRandomAmount(aCoin.miningReward)))

    aCoin.minePendingTransacts('myAddr')

    console.log('::: ::: :::')
    console.log('::: addr1 balance:', aCoin.getBalanceOfAddr('addr1'))
    console.log('::: addr2 balance:', aCoin.getBalanceOfAddr('addr2'))
    console.log('::: My balance:', aCoin.getBalanceOfAddr('myAddr'))
    console.log('::: is chain valid:', aCoin.isValid())
    console.log('::: ::: :::\n')
}
