const harflar = "0123456789ABCDEF"
const boxes = document.querySelectorAll('.box')

function random() {
    let color = '#'
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * 16)
        color += harflar[index]
    }
    return color
}

for (const box of boxes) {
    let color = random()
    box.style.background = color
    box.innerText = color

    box.addEventListener('click', () => {
        document.body.style.background = color
    })
}


