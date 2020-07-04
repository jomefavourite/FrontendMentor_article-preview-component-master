function call(name) {
    return document.querySelector(name)
}

let share = call('.share')
let overlay = call('.overlay')

share.addEventListener('click', () => {
    // overlay.style.opacity = 1;
    overlay.classList.toggle('show')
})