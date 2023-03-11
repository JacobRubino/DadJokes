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
  "joke 1",
  "joke2",
  "answer2",
  "joke3",
  "answer3",
  "joke4",
  "answer4",
];
let langButtArr = document.getElementsByClassName("language-button");
let dropdownSelect = document.getElementById("languages");

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
  for (let i = 0; i < toBeTransArr.length; i++) {
    const element = toBeTransArr[i];
    if (i < toBeTransArr.length - 1) {
      transStr = transStr + element + " |";
    } else {
      transStr = transStr + element;
    } 
  }
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