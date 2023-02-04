const refs = {
    btnStart : document.querySelector('button[data-start]'),
    btnStop : document.querySelector('button[data-stop]'),
    body : document.querySelector('body')
}

let setIntervalId = null;
refs.btnStop.setAttribute('disabled','true');

refs.btnStart.addEventListener('click',onBtnStartClick);
refs.btnStop.addEventListener('click',onBtnStopClick);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function setRandomHexColor(){
    refs.body.style.backgroundColor = getRandomHexColor();
}


function onBtnStartClick(evt){
    evt.currentTarget.setAttribute('disabled','true');
    refs.btnStop.disabled = false;
    
    setIntervalId = setInterval(setRandomHexColor,1000);
}



function onBtnStopClick(evt){
    refs.btnStart.disabled = false;
    evt.currentTarget.setAttribute('disabled','true');
   
    clearInterval(setIntervalId);
}
