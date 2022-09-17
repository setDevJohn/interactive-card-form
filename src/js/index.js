
/*
    - Error blank puxando no botão
    - Se estiver de acordo colocar uma variáve de controle correto
    - Juntar oque der
    - Se todas variáveis de controle estiverem corretas colocar página de continue 
*/

const form = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const inputsNumbers = [inputs[2], inputs[3], inputs[4]]
const fields = document.querySelectorAll(".fields")
const btnConfirm = document.getElementById("btn-confirm")
const btnContinue = document.getElementById("btn-continue")
const formComplete = document.getElementsByClassName("completed-state")[0]
const formData = document.getElementsByClassName("form-data")[0]

const cardHolder = document.getElementById("cardholder-name")
const cardNumber = document.getElementById("card-number")
const month = document.getElementById("date-month")
const year = document.getElementById("date-year")
const cvc = document.getElementById("cvc")

let frontCardYear = document.getElementById("card-date-year")
let frontCardMonth = document.getElementById("card-date-month")
let frontCardNumber = document.getElementById("front-card-number")
let frontCardName = document.getElementById("front-card-name")
let backCardCvc = document.getElementById("card-cvc")

updateCardStatus()

form.addEventListener('submit', (event)=>{
    event.preventDefault(); 
})    

function updateCardStatus() {
    cardHolder.addEventListener("change", () => {
        frontCardName.innerHTML = cardHolder.value
    })

    cardNumber.addEventListener("change", () => {
        frontCardNumber.innerHTML = cardNumber.value
    })

    month.addEventListener("change", () => {
        frontCardMonth.innerHTML = month.value
    })

    year.addEventListener("change", () => {
        frontCardYear.innerHTML = year.value
    })

    cvc.addEventListener("change", () => {
        backCardCvc.innerHTML = cvc.value
    })
}

function clearCard() {
    frontCardName.innerHTML = "Jane Appleseed"
    frontCardNumber.innerHTML = "0000 0000 0000 0000"
    frontCardMonth.innerHTML = "00"
    frontCardYear.innerHTML = "00"
    backCardCvc.innerHTML = "000"

    btnConfirm.classList.add("disabled")

    inputs.forEach((input) =>{
        input.value = ""
        input.classList.remove("activated")
        input.style.borderColor ="#c8c4c4"
    })
}

cardNumber.addEventListener('keypress', ()=>{
    let numberLength = cardNumber.value.length

    if (numberLength === 4 || numberLength === 9 || numberLength === 14) {
        cardNumber.value += ' '
    }
    
})

btnConfirm.addEventListener("click", ()=>{
    formData.style.display = "none"
    formComplete.style.display = "flex"
})

btnContinue.addEventListener("click", ()=>{
    clearCard()
    formComplete.style.display = "none"
    formData.style.display = "block"
})

inputs.forEach((input) =>{
    input.addEventListener("change", (target)=>{
        if (!input.value){
            target.path[1].classList.add("error-blank")
            input.classList.remove("activated")
            input.style.borderColor ='#ff5252'
        }else{
            target.path[1].classList.remove("error-blank") 
            input.classList.add("activated")
            input.style.borderColor ='#6448fe'
        }
    })
})

cardNumber.addEventListener("change", ()=>{
    const regex = /[a-z]/
    const numberTest = regex.test(cardNumber.value)
    if (numberTest){
        fields[1].classList.add("error-wrong")
        cardNumber.classList.remove("activated")
        cardNumber.style.borderColor ='#ff5252'
    }else{
        fields[1].classList.remove("error-wrong")
        cardNumber.classList.add("activated")
        cardNumber.style.borderColor ='#6448fe'
    }    
})

inputsNumbers.forEach((input) =>{
    input.addEventListener("change", (target)=>{
        if (isNaN(input.value)) {
            target.path[1].classList.add("error-wrong")
            input.classList.remove("activated")
            input.style.borderColor ='#ff5252'
        }else{
            target.path[1].classList.remove("error-wrong")
            input.classList.add("activated")
            input.style.borderColor ='#6448fe'
        }
    })
})

form.addEventListener("change", ()=>{
    if (cardHolder.classList == "activated" && cardNumber.classList == "activated" && month.classList == "activated" && year.classList == "activated" && cvc.classList == "activated"){
        btnConfirm.classList.remove("disabled")
    }else{
        btnConfirm.classList.add("disabled")
    }
})