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
var massA=[];
//constructor obA
function AnswerObj() {

  var tf=document.getElementsByName('aTrueFalse');
  for (var i=0;i<tf.length; i++) {
      if (tf[i].checked) {
      this.bool=false  ;
      }
      else{this.bool=true}}
  this.text=$('#textAnswer').val();
}
function plass2(){
  var newAnswer=new AnswerObj();


massA.push(newAnswer);
for(var i=0;massA.length;i++){
  alert(massA[i].['text']);
alert(massA[i].bool);
}
//alert(massA[0].bool);
$('#answerAdd').dialog('close');
}
