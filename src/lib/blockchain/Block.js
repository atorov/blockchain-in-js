const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data = {}) {
        this.data = data
        this.timestamp = Date.now()
        this.prevHash = ''
        this.nonce = 0

        this.hash = this.calcHash() // have to be after nonce setting
    }

    calcHash() {
        return SHA256(
            this.timestamp
            + this.prevHash
            + JSON.stringify(this.data)
            + this.prevHash
            + this.nonce,
        ).toString()
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++
            this.hash = this.calcHash()
        }
        console.log('::: Block mined:', this.hash)
    }
}

module.exports = Block
