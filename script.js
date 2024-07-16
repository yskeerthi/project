//arey entra udhu

    // document.getElementsByClassName('hours')[0].innerHTML=0;
    // document.getElementsByClassName('minutes')[0].innerHTML=0;
    // document.getElementsByClassName('seconds')[0].innerHTML=0;

//function to display the both type of timings
function fun1(data1,data2){
    var a=document.getElementsByClassName(data1)[0];
    a.style.display='flex';
    var b=document.getElementsByClassName(data2)[0];
    b.style.display='flex';
    var hide1=document.getElementsByClassName('timer')[0];
    hide1.style.display='none';
   
}
function fun2(data3,data4){
    var c=document.getElementsByClassName(data3)[0];
    c.style.display='flex';
    var d=document.getElementsByClassName(data4)[0];
    d.style.display='flex';
    var hide2=document.getElementsByClassName('stopwatch')[0];
    hide2.style.display='none';
   
}
//settin hours minutes secobds to 0
var h=0;
 var m=0;
var s=0;
add1,add2,add3;
function seconds(){
    s++;
    if(s==60){
        s=0;
    }
    document.getElementsByClassName('seconds')[0].innerHTML=s;
}
function minutes(){
    m++;
    if(m==60){
        m=0;
    }
    document.getElementsByClassName('minutes')[0].innerHTML=m;
}
function hours(){
    h++;
    if(h==12){
        h=0;
    }
    document.getElementsByClassName('hours')[0].innerHTML=h;
}
function start(){
    add1=setInterval(seconds,1000)
    add2=setInterval(minutes,60000)
    add3=setInterval(hours,3600000)
}

function stop() {
    clearInterval(add1);
    clearInterval(add2);
    clearInterval(add3);
}

function reset() {
    stop();
    h = 0;
    m = 0;
    s = 0;
    document.getElementsByClassName('hours')[0].innerHTML = h;
    document.getElementsByClassName('minutes')[0].innerHTML = m;
    document.getElementsByClassName('seconds')[0].innerHTML = s;
}

function back() {
    document.getElementsByClassName('button-container1')[0].style.display = 'none';
    document.getElementsByClassName('button-container2')[0].style.display = 'none';
    document.getElementsByClassName('stopwatch')[0].style.display = 'flex';
    document.getElementsByClassName('timer')[0].style.display = 'flex';
}
//timer.................

function updateTimerDisplay() {
    document.getElementsByClassName('hours1')[0].innerHTML = h;
    document.getElementsByClassName('minutes1')[0].innerHTML = m;
    document.getElementsByClassName('seconds1')[0].innerHTML = s;
}

function seconds1() {
    if (s === 0) {
        if (m === 0) {
            if (h === 0) {
                clearInterval(timerInterval);
                alert('Time is up!');
                return;
            } else {
                h--;
                m = 59;
                s = 59;
            }
        } else {
            m--;
            s = 59;
        }
    } else {
        s--;
    }
    updateTimerDisplay();
}

function startTimer() { 
    h = parseInt(document.getElementById('hours-input').value) || 0;
    m = parseInt(document.getElementById('minutes-input').value) || 0;
    s = parseInt(document.getElementById('seconds-input').value) || 0;


    var totalSeconds = h * 3600 + m * 60 + s;
    if (totalSeconds <= 0) {
        alert('Please enter a valid time');
        return;
    }

    updateTimerDisplay();
    timerInterval = setInterval(seconds1, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    h = 0;
    m = 0;
    s = 0;
    updateTimerDisplay();
}

function goback() {
    resetTimer();
    document.getElementsByClassName('button-container3')[0].style.display = 'none';
    document.getElementsByClassName('button-container4')[0].style.display = 'none';
    document.getElementsByClassName('stopwatch')[0].style.display = 'flex';
    document.getElementsByClassName('timer')[0].style.display = 'flex';
}