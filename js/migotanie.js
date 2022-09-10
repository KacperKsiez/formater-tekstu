let header = document.querySelector('.main-header__title-dash')


let isOn=true;


function switchLine(){ 

    if(isOn) {
        header.innerHTML='&nbsp;'
        isOn=false;
    } else{
        header.innerHTML='|';
        isOn=true;
    }
    setTimeout(switchLine,500)
    return;
}

switchLine()