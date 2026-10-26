const buttons = document.querySelectorAll('.container button')
const container = document.querySelector('.container')
const del = document.querySelector('.del')
const deleteX = document.querySelector('.delete')
const text = document.querySelector('.delete h1')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        container.style.display = 'none'
        deleteX.style.display = 'block'
        text.textContent = button.textContent
    })
})

del.addEventListener('click', () => {
         deleteX.style.display = 'none'
         container.style.display = 'grid'
})