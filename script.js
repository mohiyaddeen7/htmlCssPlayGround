let greenBackground = document.getElementById("greenBg")
let blueBackground = document.getElementById("blueBg")
let purpleBackground = document.getElementById("purpleBg")
let redBackground = document.getElementById("redBg")
let defaultBackground = document.getElementById("defaultBg")

greenBackground.addEventListener("click",()=>{
    document.body.style.backgroundColor = "green";
})
blueBackground.addEventListener("click",()=>{
    document.body.style.backgroundColor = "blue";
})
purpleBackground.addEventListener("click",()=>{
    document.body.style.backgroundColor = "purple";
})
redBackground.addEventListener("click",()=>{
    document.body.style.backgroundColor = "red";
})
defaultBackground.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white";
})

let i=0;

let formEle = document.getElementById("FormElement")

formEle.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    let numberForm = document.getElementById("numberFormData")
    let ideaForm = document.getElementById("ideaFormData")

    let view = document.getElementById("ViewData")

    view.innerHTML = (numberForm.value)+" - "+(ideaForm.value);

    numberForm.value = ""
    ideaForm.value = ""
})