import CryptoJS from 'crypto-js'

const key = process.env.VUE_APP_CRYPTO_KEY

export default {

  decrypt: function (secret) {
    if (secret) {
      var data = CryptoJS.AES.decrypt(secret, key)
      return JSON.parse(data.toString(CryptoJS.enc.Utf8))
    }
    return secret
  },

  encrypt: function (data) {
    let str = JSON.stringify(data)
    return CryptoJS.AES.encrypt(str, key).toString()
  }
}
