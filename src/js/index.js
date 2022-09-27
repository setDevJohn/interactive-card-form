
const cardForm = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const inputsNumbers = [inputs[2], inputs[3], inputs[4]]
const fields = document.querySelectorAll(".fields")
const btnConfirm = document.getElementById("btn-confirm")
const btnContinue = document.getElementById("btn-continue")
const formData = document.getElementsByClassName("form-data")[0]
const formComplete = document.getElementsByClassName("completed-state")[0]

console.log(formComplete);

const form = {
    name : document.getElementById("cardholder-name"),
    number : document.getElementById("card-number"),
    month : document.getElementById("date-month"),
    year : document.getElementById("date-year"),
    cvc : document.getElementById("cvc")
}

const card = {
    number : document.getElementById("front-card-number"),
    name : document.getElementById("front-card-name"),
    month : document.getElementById("card-date-month"),
    year : document.getElementById("card-date-year"),
    cvc : document.getElementById("card-cvc")
}

updateCardStatus()

cardForm.addEventListener('submit', (event)=>{
    event.preventDefault(); 
})   

cardForm.addEventListener("change", ()=>{
    if (form.name.classList == "activated" && form.number.classList == "activated" && form.month.classList == "activated" && form.year.classList == "activated" && form.cvc.classList == "activated"){
        btnConfirm.classList.remove("disabled")
    }else{
        btnConfirm.classList.add("disabled")
    }
})

function updateCardStatus() {
    form.number.addEventListener("change", () => {
        card.number.innerHTML = form.number.value
    })

    form.name.addEventListener("change", () => {
        card.name.innerHTML = form.name.value
    })

    form.month.addEventListener("change", () => {
        card.month.innerHTML = form.month.value
    })

    form.year.addEventListener("change", () => {
        card.year.innerHTML = form.year.value
    })

    form.cvc.addEventListener("change", () => {
        card.cvc.innerHTML = form.cvc.value
    })
}

function clearCard() {
    card.name.innerHTML = "Jane Appleseed"
    card.number.innerHTML = "0000 0000 0000 0000"
    card.month.innerHTML = "00"
    card.year.innerHTML = "00"
    card.cvc.innerHTML = "000"

    inputs.forEach((input) =>{
        input.value = ""
        input.classList.remove("activated")
        input.style.borderColor ="#c8c4c4"
    })

    btnConfirm.classList.add("disabled")
}

form.number.addEventListener('keypress', ()=>{
    let numberLength = form.number.value.length

    if (numberLength === 4 || numberLength === 9 || numberLength === 14) {
        form.number.value += ' '
    }
})

btnConfirm.addEventListener("click", ()=>{
    formData.style.display = "none"
    formComplete.style.display = "flex"
})

btnContinue.addEventListener("click", ()=>{
    clearCard()
    formComplete.style.display = "none"
    formData.style.display = "flex"
})

inputs.forEach((input) =>{
    input.addEventListener("input", (target)=>{
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

form.number.addEventListener("change", ()=>{
    const regex = /[a-z]/
    const numberTest = regex.test(form.number.value)
    if (numberTest){
        fields[1].classList.add("error-wrong")
        form.number.classList.remove("activated")
        form.number.style.borderColor ='#ff5252'
    }else{
        fields[1].classList.remove("error-wrong")
        form.number.classList.add("activated")
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
        }
    })
})