var CryptoJS = require("crypto-js");

module.exports.CipherText = async (text) => {
  if (!text || typeof text !== "string") return text;
  else return CryptoJS.AES.encrypt(text, process.env.SECRET).toString();
};

module.exports.DecipherText = async (ciphertext) => {
  try {
    if (!ciphertext || typeof ciphertext !== "string") return ciphertext;

    const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.SECRET);

    if (bytes.sigBytes < 0) return ciphertext;
    else if (bytes.sigBytes === 0) return "";
    else return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return ciphertext;
  }
};
