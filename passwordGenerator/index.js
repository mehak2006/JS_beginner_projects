const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password1 = ""
let password2 = ""
let lengthInput = document.getElementById("length-input")

function generateRandomPassword() {
    let passwordSize = parseInt(lengthInput.value)||15
    password1 = "";
    password2 = "";
    password1El.textContent = "";
    password2El.textContent = "";
    for(let i = 0; i < passwordSize; i++){
        let randomIndex1 = Math.floor(Math.random()* characters.length)
        let randomIndex2 = Math.floor(Math.random()* characters.length)
        
        password1 += characters[randomIndex1]
        password2 += characters[randomIndex2]
    }
    password1El.textContent = password1
    password2El.textContent = password2
}

password1El.addEventListener("click", function() {
    const text = password1El.textContent.trim()
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Password copied!")
        }).catch(err => {
            alert("Clipboard copy failed!")
        })
    }
})
password2El.addEventListener("click", function() {
    const text = password2El.textContent.trim()
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Password copied!")
        }).catch(err => {
            alert("Clipboard copy failed!")
        })
    }
})

