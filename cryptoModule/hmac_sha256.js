const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');

data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');

console.log(`hmac : ${gen_hmac}`)