export default function Modal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button#cancel')

    cancelButton.addEventListener('click', closeModal)

    function openModal() {
        modalWrapper.classList.add('active-modal')
    }

    function closeModal() {
        modalWrapper.classList.remove('active-modal')
    }

    return {
        openModal,
        closeModal
    }
}