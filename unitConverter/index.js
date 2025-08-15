/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const buttonEl = document.getElementById("button-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")

buttonEl.addEventListener("click", function(){
    render(inputEl.value)
})
function render(num){
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    const feet = (num * 3.281).toFixed(3)
    const meters = (num / 3.281).toFixed(3)
    lengthEl.innerHTML = 
    `
    
    ${num} meters = ${feet} feet | ${num} feet = ${meters} meters
    
    `
    const liters = (num * 0.264).toFixed(3)
    const gallons = (num / 0.264).toFixed(3)
    volumeEl.innerHTML = 
    `
    ${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters
    
    `
    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    const kilos = (num * 2.204).toFixed(3)
    const pounds = (num / 2.204).toFixed(3)
    // 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
    massEl.innerHTML = 
    `
    ${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos
    
    `
}