      function generateKeys() {
        var crypt = new JSEncrypt({ default_key_size: 2048 });
        crypt.getKey();
        document.getElementById("publicKey").innerHTML = crypt.getPublicKey();
        document.getElementById("privateKey").innerHTML = crypt.getPrivateKey();
      }
      function encryptText() {
        var publicKey = document.getElementById("publicKey").innerHTML;
        var text = document.getElementById("text").value;
        var crypt = new JSEncrypt();
        crypt.setPublicKey(publicKey);
        var encrypted = crypt.encrypt(text);
        document.getElementById("encrypted").innerHTML = encrypted;
      }
      function decryptText() {
        var privateKey = document.getElementById("privateKey").innerHTML;
        var encrypted = document.getElementById("encrypted").innerHTML;
        var crypt = new JSEncrypt();
        crypt.setPrivateKey(privateKey);
        var decrypted = crypt.decrypt(encrypted);
        document.getElementById("decrypted").innerHTML = decrypted;
      }
  