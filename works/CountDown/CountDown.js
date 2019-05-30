const ClickDiv = document.querySelector('.inputNumber');
const inputG = document.querySelector('.input-gourp');
const timer = document.querySelector('#countDown');
let startTime ;
let interID;
ClickDiv.addEventListener('keyup',(event)=>{
    // console.log(ClickDiv.value);
    if(event.keyCode!==13 || ClickDiv.value=='' )
        return;
    inputG.style.display= 'none';
    startTime = Math.floor(new Date().getTime()/1000) + parseInt(ClickDiv.value);
    ClickDiv.value='';
    // setTimeout('displayTimer(startTime)', 0);
    displayTimer(startTime);
    interID = setInterval('displayTimer(startTime)', 1000);
});
function convert( coutD ){

    let minits = Math.floor(parseInt(coutD)/60);
    let sec = parseInt(coutD) % 60;
    return minits + ' : ' + sec;
}
function displayTimer(startTime){

    let curTime = Math.floor( new Date().getTime() / 1000 );
    let dif = startTime-curTime;
    if(dif < 0 )
    {
        clearInterval(interID);
       
        inputG.style.display= 'flex';
        return;
    }
    let strText = convert(dif);
    timer.innerHTML = strText;
    // console.log(strText);
}