const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(timestamp, data, prevHash) {
        this.timestamp = timestamp
        this.data = data
        this.prevHash = prevHash
        this.hash = this.calcHash()
    }

    calcHash() {
        return SHA256(
            this.timestamp
            + this.prevHash
            + JSON.stringify(this.data)
            + this.prevHash
        ).toString()
    }
}

module.exports = Block
