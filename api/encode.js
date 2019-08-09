const encode = (str) => {
    return Buffer.from(str, 'binary').toString('base64');
}

module.exports = encode
