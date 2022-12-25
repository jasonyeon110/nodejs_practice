var crypto = require('crypto')

//md5 stands for message digest 5 is a widely used hash func, produces 128-bit hashes
var hash = crypto.createHash('md5')
data = hash.update('nodejsera', 'utf-8')
gen_hash = data.digest('hex')
console.log(`hash: ${gen_hash}`)