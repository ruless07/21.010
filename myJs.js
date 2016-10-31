//radiobutton
 $("#group1").buttonset();
//modal windows answer
$('#answerAdd').dialog(
 {autoOpen:false},
 {width:'600px'});

function dialogOpen(){
  $('#answerAdd').dialog('open')
}
//massiv
var answers = [];

//constructor obA
function AnswerObj(text, right) {
  this.right = right;
  this.text = text;
  console.log("created " + this);
}


function plass2() {


  let text = $('#textAnswer').val();
  let right = $('input[name=radio]:checked', '#myForm');
  console.log(right.toString());
  let answer = new AnswerObj(text, right);
  answers.push(answer);

  for(var i = 0; i < answers.length; i++) {
    console.log(answers[i]);
  }

  $('#answerAdd').dialog('close');
}
