const Block = require('./Block')

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock() {
        return new Block('2018-01-01', 'Genesis block', null)
    }

    addNewBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calcHash()
        this.chain.push(newBlock)
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
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

module.exports = Blockchain
