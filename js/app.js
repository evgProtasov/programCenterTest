const activeCircles = document.querySelectorAll('.body-number_active');
const popUpWindows = document.querySelectorAll('.body-number__text');
const activationBtn = document.querySelector('.activation-btn');
const closeWindow = document.querySelector('.popupWindow-close');
const openWindow = document.querySelector('.background-popupWindow');
const infoPcs = document.querySelectorAll('.info-pc');
const infoPcPopups = document.querySelectorAll('.info-pc__popup')

activeCircles.forEach(activeCircle => {
    for(let i = 0; i < popUpWindows.length; i++) {
        activeCircle.addEventListener('mouseover', () => {
            
            popUpWindows[i].classList.remove('body-number__text_hide')
        })
        activeCircle.addEventListener('mouseout', () => {
            
            popUpWindows[i].classList.add('body-number__text_hide')
        })
    }
    
})

infoPcs.forEach(infoPc => {
    for(let i = 0; i < infoPcPopups.length; i++) {
        infoPc.addEventListener('mouseover', () => {
            
            infoPcPopups[i].classList.remove('info-pc__popup_hide')
        })
        infoPc.addEventListener('mouseout', () => {
            
            infoPcPopups[i].classList.add('info-pc__popup_hide')
        })
    }
    
})

activationBtn.addEventListener('click', () => {
    
    openWindow.classList.remove('popupWindow__hide');
})

closeWindow.addEventListener('click', () => {
    openWindow.classList.add('popupWindow__hide');
})