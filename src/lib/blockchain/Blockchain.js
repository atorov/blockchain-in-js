const Block = require('./Block')

class Blockchain {
    constructor() {
        this.chain = [Blockchain.createGenesisBlock()]
        this.difficulty = 3
    }

    addNewBlock(block) {
        const newBlock = block
        newBlock.prevHash = this.getLatestBlock().hash
        newBlock.mineBlock(this.difficulty)
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

Blockchain.createGenesisBlock = () => new Block()

module.exports = Blockchain
