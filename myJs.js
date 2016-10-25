//radiobutton
 $("#group1").buttonset();
//modal windows answer
$('#answerAdd').dialog(
 {autoOpen:false},
 {width:'600px'});

function dialogOpen(){
  $('#answerAdd').dialog('open')
}



var textA=function (){
var  text=$('#textAnswer').text();
return text;
}
var boolA=function(){
    var tf=document.getElementsByName('aTrueFalse');
    for (var i=0;i<tf.length; i++) {
        if (tf[i].checked) {
            alert('Выбран '+i+' radiobutton');
        }
    }
}
//massiv
var massA=[];
//constructor obA
function AnswerObj(textt,booll) {
  this.text=textt;
  this.bool=booll;
}




//


function plass2(){
  var newAnswer=new AnswerObj(textA,boolA);
  if ("text" in newAnswer) {
//  alert( "Свойство name существует!" );
}
massA.push(newAnswer);
alert(massA[0].text);
alert(massA[0].bool);
$('#answerAdd').dialog('close');
}
