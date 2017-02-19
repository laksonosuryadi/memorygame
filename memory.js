var q = []; //array to store which card were flipped
var w = 0; //Pair counter
var count = 0; //Flip counter
var s = 0; //second of timer
var m = 0; //minute of timer
var x = 0; //adding zero in front of second before s = 10
var t; //timer
var started = 0; //flag to check the game has started or not

function flip(num) {
  if(started === 1){
  var x = "#card" + num;
  document.querySelector(x).classList.toggle("flip");
  q.push(num);
  close();
  console.log(q);
  count++;
  if(count > 0){
    var p = document.getElementById("flipCount");
    p.style.visibility = "visible";
    p.innerHTML = "Flips = " + count;
  }
  }
}
function start(){
  started = 1;
  timeCount();
  document.getElementById("flipCount").style.visibility = "visible";
  document.getElementById("start").style.display = "none";
}

function timeCount()
{
var time = document.getElementById("timer");
time.style.visibility = "visible";
time.innerHTML = "Time = " + m + ":" + x + s;
s=s+1;
if(s===10){
	x="";
}
if(s===60){
	s=0;
	m=m+1;
}
  t = setTimeout("timeCount()", 1000);
}

function close(){
  if(q.length===2){
    if((q[0]===1 && q[1]===2) || (q[0]===2 && q[1]===1)){
      document.getElementById('card1').style.visibility="hidden";
      document.getElementById('card2').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===3 && q[1]===4) || (q[0]===4 && q[1]===3)){
      document.getElementById('card3').style.visibility="hidden";
      document.getElementById('card4').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===5 && q[1]===6) || (q[0]===6 && q[1]===5)){
      document.getElementById('card5').style.visibility="hidden";
      document.getElementById('card6').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===7 && q[1]===8) || (q[0]===8 && q[1]===7)){
      document.getElementById('card7').style.visibility="hidden";
      document.getElementById('card8').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===9 && q[1]===10) || (q[0]===10 && q[1]===9)){
      document.getElementById('card9').style.visibility="hidden";
      document.getElementById('card10').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===11 && q[1]===12) || (q[0]===12 && q[1]===11)){
      document.getElementById('card11').style.visibility="hidden";
      document.getElementById('card12').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===13 && q[1]===14) || (q[0]===14 && q[1]===13)){
      document.getElementById('card13').style.visibility="hidden";
      document.getElementById('card14').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if ((q[0]===15 && q[1]===16) || (q[0]===16 && q[1]===15)){
      document.getElementById('card15').style.visibility="hidden";
      document.getElementById('card16').style.visibility="hidden";
      q.pop();
      q.pop();
      w++;
      win();
    } else if (q[1] === q[0]){
      var z = "#card" + q[0];
      document.querySelector(z).classList.toggle("flip");
      q.pop();
    }
  }

  if(q.length===3){
    var u = "#card" + q[0];
    var v = "#card" + q[1];

    if(q[2]===q[0]){
      document.querySelector(u).classList.toggle("flip");
      q.pop();
    }

    else if (q[2]===q[1]){
      document.querySelector(v).classList.toggle("flip");
      q.pop();
    }

    else {
      document.querySelector(u).classList.toggle("flip");
      document.querySelector(v).classList.toggle("flip");
      q.shift();
      q.shift();
    }
  }
}


document.getElementById('card1').onclick = function() {flip(1);};
document.getElementById('card2').onclick = function() {flip(2);};
document.getElementById('card3').onclick = function() {flip(3);};
document.getElementById('card4').onclick = function() {flip(4);};
document.getElementById('card5').onclick = function() {flip(5);};
document.getElementById('card6').onclick = function() {flip(6);};
document.getElementById('card7').onclick = function() {flip(7);};
document.getElementById('card8').onclick = function() {flip(8);};
document.getElementById('card9').onclick = function() {flip(9);};
document.getElementById('card10').onclick = function() {flip(10);};
document.getElementById('card11').onclick = function() {flip(11);};
document.getElementById('card12').onclick = function() {flip(12);};
document.getElementById('card13').onclick = function() {flip(13);};
document.getElementById('card14').onclick = function() {flip(14);};
document.getElementById('card15').onclick = function() {flip(15);};
document.getElementById('card16').onclick = function() {flip(16);};


function win() {
  if(w===8){
    document.getElementById("button").style.display="initial";
    clearTimeout(t);
  }
}

function reset() {
	y = confirm("PLAY AGAIN? \n - Click CANCEL to End Game \n - Click OK to Restart Game" );
  if(y === true){
    alert("Now Loading...");
    location.reload(true);
  } else {
	  alert("Thanks for playing! See you again!");
  }
}
