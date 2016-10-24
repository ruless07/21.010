//radiobutton
 $("#group1").buttonset();

 //modal windows answer

 $('#answerAdd').dialog(
 {autoOpen:false},
 {width:'600px'});
// this is my comment
//button
var massA=[];
//constructor obA
function AnswerObj(text) {
  this.text=text;
}
var textA=function (){
var  text=$('#textAnswer').text();
alert(text);
return text;
}


//


function plass2(){
  var newAnswer=new AnswerObj(textA);
  if ("text" in newAnswer) {
  alert( "Свойство name существует!" );
}
$('#answerAdd').dialog('close');
}
