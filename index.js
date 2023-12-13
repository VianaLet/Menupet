const cardsData = [
    {
        title: "Chocolate",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque et debitis laborum doloremque id sunt quas dolore ",
    }
]

const modalContent = document.getElementsByClassName("modal-content")

function criaCard(){
    console.log(modalContent[0])
    cardsData.forEach(data => {
        console.log(data)
        const modalHeader = document.createElement("div")
        modalHeader.classList.add("modal-header")
        console.log(modalHeader)


        modalContent.append
    })
    
}

window.onload = criaCard()