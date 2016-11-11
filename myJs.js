
var vue = new Vue({
  el: '#vue-app',
  data: {
    message: 'Hello Vue!',
    answers: [{text: "sdff"}]
  }
})



let button1Query = $('#button1').first();
let button3Query = $('#button3').first();

//constructor obA
function AnswerObj(text, right) {
  this.right = right;
  this.text = text;
  console.log("created AnswerObj: " + this.right + ": " + this.text);
}


//ui setup
//radiobutton
 //$("#answerTabBar").buttonset();

//modal windows answer
/*$('#answerDialog').dialog(
 {autoOpen:false},
 {width:'250px'}
);
*/

function listAnswers (localAnswers) {
  console.log("list of answers:");
  for(let idx = 0; idx < localAnswers.length; idx++) {
    let answer = localAnswers[idx];
    let desc = ""
    if (answer.right) {
      desc += "* ";
    }
    desc += answer.text;
    console.log(desc);
  }
}

if (button1Query.length === 1) {
  console.log("button1 connected");
  button1Query.click(function button1_onClick()  {
    console.log("button1_onClick")
    //$('#answerDialog').first().dialog('open');
  });
}

if (button3Query.length === 1) {
  console.log("button3 connected");
  button3Query.click(function button3_onClick() {
    console.log("button3_onClick")
    let textAnswerQuery = $('#textAnswer').first();
    let text = textAnswerQuery.val();
    textAnswerQuery.val('');
    let rightAnswerQuery =  $('#rightAnswer').first();
    let checked = rightAnswerQuery.prop('checked');
    rightAnswerQuery.prop('checked', false); 
    let answer = new AnswerObj(text, checked);
    vue.answers.push(answer);

    //listAnswers(answers);

    //$('#answerDialog').dialog('close');
  });
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
