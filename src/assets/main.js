let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if(answer.value == '' || attempt.value == '')
    {
      setHiddenFields();
    }
}

function setHiddenFields(){

  answer.value = Math.floor(Math.random() * 10000).toString();

  while(answer.length < 4){
    answer.value += "0";

  }
  attempt.value = '0';
}

function setMessage(message){
  message.innerHTML = message;
}

function validateInput(input){
  if(!input.value){
    return false;
  }
  ateempt.value++;
}

function getResults(input){
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

  
}
