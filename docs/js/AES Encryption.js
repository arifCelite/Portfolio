// This funciton encrypts the text. First it takes the text , password and which type of mode (CBC or ECB)
function encryptText() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("password").value;
    var mode = document.querySelector('input[name="mode"]:checked').value;
    var encrypted;
    if (mode === "CBC") 
    {
      // The CryptoJS function uses the mode CBC to decrypt. Then we convert the value to string and display at the end.
      encrypted = CryptoJS.AES.encrypt(text, password, { mode: CryptoJS.mode.CBC }).toString();
    } 
    else if (mode === "ECB") 
    {
      encrypted = CryptoJS.AES.encrypt(text, password, { mode: CryptoJS.mode.ECB , padding: CryptoJS.pad.ZeroPadding}).toString();
    }
    document.getElementById("encrypted").innerHTML = encrypted;
  }

  // This is the Decryption funciton with a few checks to make sure that the fields are not empty
  function decryptText() {
    var password = document.getElementById("password").value;
    var encrypted = document.getElementById("crypted").value;
    var decrypted = CryptoJS.AES.decrypt(encrypted, password, {mode: CryptoJS.mode.ECB}).toString(CryptoJS.enc.Utf8);
    if(encrypted==="")
    {
        document.getElementById("decrypted").innerHTML = "No Encrypted text";
        return;
    }
    if(password==="")
    {
        document.getElementById("decrypted").innerHTML = "Please Enter Password";
        return;
    }
    document.getElementById("decrypted").innerHTML = decrypted;
  }