const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'md5';
const secret = 'Rj2895647';
const hmac = crypto.createHmac(algorithm, secret);

const filename = 'hmac_data.txt';
const file_data = fs.ReadStream(filename);

file_data.on('data', (data) => {
    hmac.update(data);
});

file_data.on('end', () => {
    const gen_hmac = hmac.digest('hex');
    console.log('Hmac generated using ' + algorithm + ' \nHashed output is :  ' + gen_hmac + ' \nFile name is :  ' + filename);
    fs.writeFileSync(filename, gen_hmac)
})