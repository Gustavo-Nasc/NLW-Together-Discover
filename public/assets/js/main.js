import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalBtn = document.querySelector('.modal button')

const checkBtns = document.querySelectorAll('a.check')

checkBtns.forEach(checkBtn => {
    checkBtn.addEventListener('click', handleClick)
})

const deleteBtns = document.querySelectorAll('a.delete')

deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()

    const roomId = document.querySelector('#room-id').dataset.id
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} essa pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalBtn.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalBtn.classList.remove('red') : modalBtn.classList.add('red')

    modal.openModal()
}

const roomForm = document.querySelector('#questions-form form')
const textareaRoomForm = document.querySelector('#questions-form form textarea')

textareaRoomForm.addEventListener('change', () => {
    if (textareaRoomForm.value == "") {
        roomForm.style.border = "0.2rem solid var(--gray)"
    } else {
        roomForm.style.border = "0.2rem solid var(--brand)"
    }
})