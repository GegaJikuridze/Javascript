const body = document.body //body
const night = document.getElementById('moon') // Night button
const day = document.getElementById('sun') // Day button

const nightDayMode = localStorage.getItem('body-Background')


if(nightDayMode === 'dark'){
    nightMode()
}

if(nightDayMode == 'day'){
    dayMode()
}


//night mode function
function nightMode(){
    body.style.background = 'black'
     body.style.color = 'rgb(128, 211, 196)'
     localStorage.setItem('body-Background', 'dark')
}

//day mode function
function dayMode (){
    body.style.background = 'rgb(128, 211, 196)'
    body.style.color = 'black'
    localStorage.setItem('body-Background', 'day')
}

//night button click
night.addEventListener('click',  nightMode)

//day button click
day.addEventListener('click', dayMode)