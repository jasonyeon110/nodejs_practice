var crypto = require('crypto')
var hash = crypto.createHash('sha1')
data = hash.update('jason', 'utf-8')
gen_hash = data.digest('hex')
console.log(`hash: ${gen_hash}`)