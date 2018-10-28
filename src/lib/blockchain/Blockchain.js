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
}

module.exports = Blockchain
