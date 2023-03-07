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

const encodedParams = new URLSearchParams();
encodedParams.append("q", "English is hard, but detectably so");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '8d76cdcb11msh971a68b9bacde6ap19281ajsn6ecf6b164def',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

function testGoogleTranslate() {
fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
testGoogleTranslate();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "0b838a4d3fmsheccda4035a1ab37p1f5f85jsn1859900e2b60",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"source": "en",
		"q": "Contact Form | Name | Contact Number | Email",
		"target": ""
	}
	
}
//make a request in JSON format that has the phrase that we're translating. (dad joke), the source language (english), and the target language (what user chooses) as an object.

//object-- key will be language user selects value will be google language that correspondes to user language chosen.
