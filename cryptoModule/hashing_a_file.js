const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'sha256';
const hash = crypto.createHash(algorithm);

const filename = 'data.txt';
const file_data = fs.ReadStream(filename);

file_data.on('data', (data) => {
    hash.update(data);
});

file_data.on('end', () => {
    const gen_hash = hash.digest('hex');
    console.log(`Hash Generated Using ${algorithm} \nHashed Ouput is ${gen_hash} \nFile name is ${filename}`);
    fs.writeFileSync(filename, gen_hash)
})