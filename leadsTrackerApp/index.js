import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js"
const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-28ce1-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")





inputBtn.addEventListener("click", function() {
    console.log(inputEl.value)
    inputEl.value = ""
    
})

deleteBtn.addEventListener("dblclick", function(){
  
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
