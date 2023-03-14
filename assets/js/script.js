let transStr = "";
let jokeArr = document.getElementsByClassName("joke");
console.log(jokeArr);
let toBeTransArr = [
  "i want these",
  "strings to",
  "be translated",
  "it will work",
];
let translationArr = [
  "joke1",
  "answer1",
  "joke2",
  "answer2",
  "joke3",
  "answer3",
  "joke4",
  "answer4",
];
let langButtArr = document.getElementsByClassName("language-button");
let dropdownSelect = document.getElementById("languages");
let populateButts = document.getElementsByClassName("populate")

for (let indx = 0; indx < jokeArr.length; indx++) {
  const element = jokeArr[indx];
  toBeTransArr[indx] = jokeArr[indx].innerHTML;
  // console.log(toBeTransArr);
}
const settings = {
  async: true,
  crossDomain: true,
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  method: "POST",
  headers: {
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "26e9993876msh0d6ebef81a82d97p17d492jsn2791beb50392",
    "content-type": "application/x-www-form-urlencoded",
  },
  data: {
    source: "en",
    q: "default",
    target: "",
  },
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '915dac4a9dmsh0b299010a64be77p11cef1jsncff8db7d42f8',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

function testDadJoke() {
  return fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => data)
    .catch(err => console.error(err));

}

function createJokeElement() {
  for (let index = 0; index < dadJokeAr.length; index++) {
    const jokeElement = dadJokeAr[index];


  }
}

let dadJokeAr = []
let dadpunchlineAr = []

document.getElementById('.ui button')

function callJoke() {
  var djSetup = document.getElementById('joke-0')
  var djPunchline = document.getElementById('joke-1')
  djSetup.innerText = 'Loading Joke'
  djPunchline.innerText = ''
  testDadJoke().then((data) => {
    console.log (data)
    // while (data.body[0].NSFW == false) {
    //   testDadJoke().then((data) => {return data})
    // }
    if (data.body[0].NSFW == false) {
      const joke = data.body[0].setup;
      const punchline = data.body[0].punchline;
      dadJokeAr.unshift(joke);
      console.log(joke, punchline)
      djSetup.innerText = joke
      djPunchline.innerText = punchline
    } 
  })
}

  // for (let index = 0; index < dadJokeAr.length; index++) {
  //     const jokeElement = dadJokeAr[index]; 
  //     const heading = document.createElement('h1'); 
  //     const jokediv = document.getElementById('joke');
  //    heading.innerHTML = jokeElement;
  //    heading.className = 'dadjoke'
  //    jokediv.appendChild(heading);
  //    heading.id = `joke${index}`
      
     
  





callJoke();

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

function checkTime() {
  //this should be in an interval that checks perhaps every 5-10 seconds
  //access local storage to get yesterdays joke time
  // have it store month, day, hour and minute in an array
  // set each index on the array to the time it corresponds to, month, day, hour, minute
  // new month is like a new day, but will ruin us checking if current day > local stored day as current day will be a lower number,
  // so if month is greater go to check if hour is greater, then minute. 
  // if month isnt greater, check day, if day isnt greater, a day hasnt passed. 
  // if day is is greater, check hour, if hour is greater, a day has passed.
  //if hour equal, check minute, if minute is greater a day has passed, if either are not greater, a day has not passed. 
} // if this returns true, change the joke of the day by calling the dad joke api again. 

for (let index = 0; index < populateButts.length; index++) {
  let answer = ''
  let joke = ''
  let jotdPunchline = document.getElementById('joke-0')
  let jotdAns = document.getElementById('joke-1')
  const element = populateButts[index];
  element.addEventListener("click", function () {
    console.log(element, index)
    if (index === 0) {
      joke = document.getElementById('joke-2')
      answer = document.getElementById('joke-3')
      var currentJotdPl = jotdPunchline.innerText
      var currentJotdAns = jotdAns.innerText
      jotdPunchline.innerText = joke.innerText
      jotdAns.innerText = answer.innerText
      console.log(currentJotdAns, currentJotdPl)
      joke.innerText = currentJotdPl
      answer.innerText = currentJotdAns
    } else if (index === 1) {
      joke = document.getElementById('joke-4')
      answer = document.getElementById('joke-5')
      var currentJotdPl = jotdPunchline.innerText
      var currentJotdAns = jotdAns.innerText
      jotdPunchline.innerText = joke.innerText
      jotdAns.innerText = answer.innerText
      console.log(currentJotdAns, currentJotdPl)
      joke.innerText = currentJotdPl
      answer.innerText = currentJotdAns
    } else {
      joke = document.getElementById('joke-6')
      answer = document.getElementById('joke-7')
      var currentJotdPl = jotdPunchline.innerText
      var currentJotdAns = jotdAns.innerText
      jotdPunchline.innerText = joke.innerText
      jotdAns.innerText = answer.innerText
      console.log(currentJotdAns, currentJotdPl)
      joke.innerText = currentJotdPl
      answer.innerText = currentJotdAns
    }
  })
}



function testGoogleTranslate() {
  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
// testGoogleTranslate();

function makestr() {
  transStr = toBeTransArr.join(" | ")
  // for (let i = 0; i < toBeTransArr.length; i++) {
  //   const element = toBeTransArr[i];
  //   if (i < toBeTransArr.length - 1) {
  //     transStr = transStr + element + " |";
  //   } else {
  //     transStr = transStr + element;
  //   } 
  // }
  console.log(transStr);
}
// try seperating by Array.join()

function validate() {
  var card = document.getElementById("languages");
  if (card.selectedIndex == 0) {
    console.log("select one answer");
  } else {
    var selectedText = card.options[card.selectedIndex].text;
    console.log(selectedText);
  }
}

$(document).ready(function () {
  makestr();
  settings.data.q = transStr;
  dropdownSelect.addEventListener("change", function () {
    validate();
    var currentLang = document.getElementById("languages");
    var currentAtr = currentLang.options[currentLang.selectedIndex].label;
    console.log(currentAtr);
    if (currentAtr != "en") {
      settings.data.target = currentAtr;
      console.log(settings.data.target);
      fetchTranslation();
    }
  });
});

// fetchTranslation()
function fetchTranslation() {
  $.ajax(settings).done(function (response) {
    console.log(response);
    var translatedText = response.data.translations[0].translatedText;
    updatePlaceholders(translatedText);
  });
}
function updatePlaceholders(updateString) {
  var comp = updateString.split("|");
  console.log(comp);
  for (let index = 0; index < comp.length; index++) {
    const element = comp[index].trim();
    console.log(element);
    translationArr[index] = element;
    console.log(translationArr);
  }
  for (let index = 0; index < translationArr.length; index++) {
    const element = translationArr[index];
    console.log(element);
    var jokey = document.getElementById(`joke-${index}`);
    jokey.innerText = element;
  }
}