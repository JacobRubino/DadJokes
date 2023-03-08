let transStr = ""
const toBeTransArr = ["i want these", "strings to", "be translated", "it will work"]
let translationArr = [ "test1", "test2", "test3", "test4" ] 
let langButtArr = document.getElementsByClassName("language-button")
let dropdownSelect = document.getElementById("languages")
// let lang = document.getElementByName("languages")[0].label;
// console.log(lang)
// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "English is hard, but detectably so");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': '8d76cdcb11msh971a68b9bacde6ap19281ajsn6ecf6b164def',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "46aa698a57msh67443578dd57e7fp1794acjsnfbdded0b23d9",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "source": "en",
    "q": "default",
    "target": ""
  }
}

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '8d76cdcb11msh971a68b9bacde6ap19281ajsn6ecf6b164def',
//         'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//     }
// };


// function testDadJoke() {
//     fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }
// testDadJoke();





function testGoogleTranslate() {
fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
// testGoogleTranslate();

function makestr(){
  for (let i = 0; i < toBeTransArr.length; i++) {
    const element = toBeTransArr[i];
    if (i<3){
    transStr = transStr + element +' |'
    } else {
    transStr = transStr + element
    }
    console.log(transStr)
  }
}


function validate()
{
	var card = document.getElementById("languages");
	if(card.selectedIndex == 0) {
			 console.log('select one answer');
	}
	else {
			var selectedText = card.options[card.selectedIndex].text;
			console.log(selectedText);
	}
}


$(document).ready(function(){
  makestr()
  settings.data.q = transStr
	dropdownSelect.addEventListener("change", function(){
		validate()
		var currentLang = document.getElementById("languages")
		var currentAtr = currentLang.options[currentLang.selectedIndex].label
		console.log(currentAtr)
		if(currentAtr != 'en'){
			settings.data.target = currentAtr;
			console.log(settings.data.target)     
		// fetchTranslation();
			}
		})
	}	
)

// fetchTranslation()
function fetchTranslation(){
  // settings.data.target = // PUT THE toLang here
  $.ajax(settings).done(function (response) {   
    console.log(response);
    var translatedText = response.data.translations[0].translatedText;  
    updatePlaceholders(translatedText); 
  });
}
function updatePlaceholders(updateString){
  var comp = updateString.split('|')
  console.log(comp)
  for (let index = 0; index < comp.length; index++) {
    const element = comp[index].trim();
    console.log(element)
    translationArr[index] = element
    console.log(translationArr)
  }
}
//make a request in JSON format that has the phrase that we're translating. (dad joke), the source language (english), and the target language (what user chooses) as an object.

//object-- key will be language user selects value will be google language that correspondes to user language chosen.
