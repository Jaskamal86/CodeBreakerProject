let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields(){

  answer.value = Math.floor(Math.random() * 10000).toString();

  while(answer.length < 4){
    answer.value += "0";
    
  }
  attempt.value = '0';
}
