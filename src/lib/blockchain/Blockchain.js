const Block = require('./Block')
const Transact = require('./Transact')

class Blockchain {
    constructor() {
        this.difficulty = 4
        this.miningReward = 100

        this.chain = [Blockchain.createGenesisBlock()]
        this.pendingTransacts = []
    }

    createTransact(transact) {
        this.pendingTransacts.push(transact)
    }

    minePendingTransacts(rewardAddr) {
        const newBlock = new Block(this.pendingTransacts)
        newBlock.prevHash = this.chain[this.chain.length - 1].hash
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
        this.pendingTransacts = [new Transact(null, rewardAddr, this.miningReward)]
    }

    getBalanceOfAddr(addr) {
        let balance = 0
        this.chain.forEach((block) => {
            block.transacts.forEach((transact) => {
                if (transact.fromAddr === addr) {
                    balance -= transact.amount
                }
                if (transact.toAddr === addr) {
                    balance += transact.amount
                }
            })
        })
        return balance
    }

    isValid() {
        let res = true
        this.chain.forEach((_, index) => {
            const currBlock = this.chain[index]
            const prevBlock = this.chain[index - 1]
            if (res) {
                if (currBlock.hash !== currBlock.calcHash()) res = false
                else if (index && currBlock.prevHash !== prevBlock.hash) res = false
            }
        })
        return res
    }
}

Blockchain.createGenesisBlock = () => new Block()

module.exports = Blockchain
