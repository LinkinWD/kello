const deg = 6
const tun = document.querySelector('#tun')
const min = document.querySelector('#min')
const sek = document.querySelector('#sek')

setInterval(() => {
    
    let päivä = new Date();
    let tt = päivä.getHours() * 30
    let mm = päivä.getMinutes() * deg
    let ss = päivä.getSeconds() * deg

    tun.style.transform = `rotateZ(${(tt)+(mm/12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sek.style.transform = `rotateZ(${ss}deg)`
})
