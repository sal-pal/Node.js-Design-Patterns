//Creating readable stream that generates random strings

const stream = require('stream')
const Chance = require('chance').Chance
const chance = new Chance()


class RandomStream extends stream.Readable {
    constructor(options) {
        super(options)
    }
    _read(size) {
        //Make random string
        const chunk = chance.string()
        this.push(chunk, 'utf-8')
        if (chance.bool({likelihood: 5})) {
            this.push(null)
        }
    }
}

module.exports = RandomStream