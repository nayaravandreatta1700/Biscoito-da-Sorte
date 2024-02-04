const home = document.querySelector(".home")
const sorte = document.querySelector(".sorte")
const message1 = document.querySelector(".message1")
const message2 = document.querySelector(".message2")
const btnImage = document.querySelector("#btnImage")
const btnOther = document.querySelector("#btnOther")


btnImage.addEventListener('click', handleImageClick)
btnOther.addEventListener('click', handleOtherClick)

function handleImageClick(){
    toggleScreen()
}

function handleOtherClick(){
    toggleMessage()
}

function toggleScreen() {
    home.classList.toggle('hide')
    sorte.classList.toggle('hide')
}

function toggleMessage(){
    message1.classList.toggle('hide')
    message2.classList.toggle('hide')
}


