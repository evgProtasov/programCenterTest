const activeCircles = document.querySelectorAll('.body-number_active');

const activationBtn = document.querySelector('.activation-btn');
const closeWindow = document.querySelector('.popupWindow-close');
const openWindow = document.querySelector('.background-popupWindow');

const infoPcs = document.querySelectorAll('.info-pc');
const infoPcPopups = document.querySelectorAll('.info-pc__popup')

function activeReference(e) {
    const target = e.target;
    const child = target.firstElementChild
    console.log(child)
    if (child.classList.contains('body-number__text_hide')) {
        child.classList.remove('body-number__text_hide')
    } else {
        child.classList.add('body-number__text_hide')
    }
}

function activePcInfo(e) {
    const target = e.target;
    const child = target.firstElementChild
    console.log(child)
    if (child.classList.contains('info-pc__popup_hide')) {
        child.classList.remove('info-pc__popup_hide')
    } else {
        child.classList.add('info-pc__popup_hide')
    }
}

activeCircles.forEach(activeCircle => {
    activeCircle.addEventListener('mouseover', activeReference)
    activeCircle.addEventListener('mouseout', activeReference)
})

infoPcs.forEach(infoPc => {
    infoPc.addEventListener('mouseover', activePcInfo)
    infoPc.addEventListener('mouseout', activePcInfo)
})

activationBtn.addEventListener('click', () => {
    
    openWindow.classList.remove('popupWindow__hide');
})

closeWindow.addEventListener('click', () => {
    openWindow.classList.add('popupWindow__hide');
})