let transStr = "";
let jokePlacementArr = document.getElementsByClassName("joke");
console.log(jokePlacementArr);
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
let populateButts = document.getElementsByClassName("populate");

const jotdJokeArr = [
  "What did the evil chicken lay?",

  "I'm afraid for the calendar.",

  "What did the ocean say to the beach?",

  "I only know 25 letters of the alphabet.",

  "What did the zero say to the eight?",

  "I asked my dog what’s two minus two.",

  "What does a sprinter eat before a race?",

  "Dad, did you get a haircut?",

  "I don’t trust those trees.",

  "How do you get a squirrel to like you?",
];

const JotdAnswerArr = [
  "Deviled Eggs",

  "Its days are numbered.",

  "Nothing, it just waved.",

  " I don’t know y.",

  "That belt looks good on you.",

  "He said nothing.",

  "Nothing, they fast!",

  "No, I got them all cut!",

  "They seem kind of shady.",

  "Act like a nut.",
];

const jokeArr = [
  "What do you call a line of men waiting to get haircuts?",

  "Where do pirates get their hooks?",

  "I just broke up with my mathematician girlfriend.",

  "What does a baby computer call his father?",

  "What do you call a beehive without an exit?",

  "Did you know that the first french fries weren't cooked in France?",

  "I asked my date to meet me at the gym but she never showed up.",

  "To whoever stole my copy of Microsoft Office, I will find you.",

  "What's Forrest Gump's password?",

  "If prisoners could take their own mug shots…",

  "What is a guitar player's favorite Italian food?",

  "How does cereal pay its bills?",

  "Have you heard about the restaurant on the moon?",

  "I don't trust stairs.",

  "Never date a tennis player.",

  "What's a lawyer's favorite drink?",

  "I used to hate facial hair,",

  "I don't get why bakers aren't wealthier.",

  "I hate it when people say age is only a number.",

  "What's an astronaut's favorite part of the computer?",

  "Today I'm attaching a light to the ceiling,",

  "I just applied for a job down at the diner.",

  "Why was 2019 afraid of 2020?",

  "What has five toes and isn't your foot?",

  "When I was a kid, my mother told me I could be anyone I wanted to be.",

  "What did one plate whisper to the other plate?",

  "Stop looking for the perfect match;",

  "Did you hear the rumor about butter?",

  "What does a nosey pepper do?",

  "What concert would cost only 45 cents?",

  "How do you deal with a fear of speed bumps?",

  "What did the baby corn say to the mama corn?",

  "What do you call two monkeys who share an Amazon Prime account?",

  "Why did the football coach go to the bank?",

  "Why can't a leopard hide?",

  "Can February March?",

  "How you fix a broken pumpkin?",

  "Why are fish so smart?",

  "What do houses wear?",

  "I'm so good at sleeping",

  "It's easy to convince ladies not to eat Tide Pods,",

  "If two vegetarians get in an argument,",
];
localStorage.setItem("yesSet", "If two vegetarians get in an argument,")
localStorage.setItem("yesJoke", "is it still called beef?")
const answerArr = [
  "A barberqueue.",

  "Second hand stores.",

  "She was obsessed with an X.",

  "Data.",

  "Unbelievable.",

  "They were cooked in Greece.",

  "I guess the two of us aren't going to work out.",

  "You have my Word.",

  "1forrest1.",

  "They'd be called cellfies.",

  "Strum-boli.",

  "With Chex.",

  "Great food, no atmosphere.",

  "They're always up to something.",

  "Love means nothing to them.",

  "Subpoena colada.",

  "but then it grew on me.",

  "They make so much dough.",

  "Age is clearly a word.",

  "The Space Bar.",

  "but I'm afraid I'll probably screw it up.",

  "I told them I really bring a lot to the table.",

  "Because they had a fight and 2021.",

  "My foot.",

  "Turns out, identity theft is a crime.",

  "Dinner is on me.",

  "use a lighter.",

  "Well, I'm not going to go spreading it!",

  "It gets jalapeño business.",

  "50 Cent featuring Nickelback!",

  "You slowly get over it.",

  "Where's popcorn?",

  "Prime mates.",

  "To get his quarter back.",

  "He's always spotted.",

  "No, but April May!",

  "With a pumpkin patch!",

  "They live in schools!",

  "An address.",

  "Loafers.",

  "that I do it with my eyes closed.",

  "but harder to deter gents.",

  "is it still called beef?",
];


const settings = {
  async: true,
  crossDomain: true,
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  method: "POST",
  headers: {
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "b33c9eedf6mshd52e5546c879707p1d5f51jsn72812cc74aa5",
    "content-type": "application/x-www-form-urlencoded",
  },
  data: {
    source: "en",
    q: "default",
    target: "",
  },
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "efa384be52msh350df4030dbda55p1b1a9ejsnbf7edfdb014d",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

function testDadJoke() {
  return (
    fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
      .then((response) => response.json())
      // .then(response => console.log(response))
      .then((data) => data)
      .catch((err) => console.error(err))
  );
}makestr

function createJokeElement() {
  for (let index = 0; index < dadJokeAr.length; index++) {
    const jokeElement = dadJokeAr[index];
  }
}

let dadJokeAr = [];
let dadpunchlineAr = [];

document.getElementById(".ui button");

function callJoke() {
  var djSetup = document.getElementById("joke-0");
  var djPunchline = document.getElementById("joke-1");
  djSetup.innerText = "Loading Joke";
  djPunchline.innerText = "";
  testDadJoke().then((data) => {
    console.log(data);
    if (data.body[0].NSFW == false) {
      const joke = data.body[0].setup;
      const punchline = data.body[0].punchline;
      dadJokeAr.unshift(joke);
      console.log(joke, punchline);
      djSetup.innerText = joke;
      djPunchline.innerText = punchline;
    } else {
      JIndx = Math.floor(Math.random() * 10);
      djSetup.innerText = jotdJokeArr[JIndx];
      djPunchline.innerText = JotdAnswerArr[JIndx];
    }
  });
}

// for (let index = 0; index < dadJokeAr.length; index++) {
//     const jokeElement = dadJokeAr[index];
//     const heading = document.createElement('h1');
//     const jokediv = document.getElementById('joke');
//    heading.innerHTML = jokeElement;
//    heading.className = 'dadjoke'
//    jokediv.appendChild(heading);
//    heading.id = `joke${index}`

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

function setJotd(){
  let setup = localStorage.getItem('jotdSetup')
  let joPl = localStorage.getItem('jotdPL')
  let jotdSetup = document.getElementById('joke-0')
  let jotdPls = document.getElementById('joke-1')
  jotdSetup.innerText = setup
  jotdPls.innerText = joPl
}

setJotd()

function checkTime() {
  let nowMonth = Number(dayjs().format("M"));
  let nowDay = Number(dayjs().format("D"));
  let nowHour = Number(dayjs().format("H"));
  let nowMinute = Number(dayjs().format("m"));
  console.log(nowMonth, nowDay, nowHour, nowMinute);
  let stored_time = JSON.parse(localStorage.getItem("dateArr"));
  if (stored_time == null) {
    storeThis = JSON.stringify([nowMonth, nowDay, nowHour, nowMinute]);
    localStorage.setItem("dateArr", storeThis);
    // console.log(storeThis);
  } else {
    // console.log(stored_time);
    let storeMonth = Number(stored_time[0]);
    let storeDay = Number(stored_time[1]);
    let storeHour = Number(stored_time[2]);
    let storeMinute = Number(stored_time[3]);
    console.log(storeMonth, storeDay, storeHour, storeMinute);
    if (nowMonth > storeMonth) {
      if (nowHour >= storeHour) {
        if (nowMinute > storeMinute) {
          console.log("joke should change");
          callJoke()
          // localStorage.setItem('JOTD', set new joke here Pl and setup, and set yesterdays joke as the current one)
        } else {
          console.log("MG,HG/E,ML");
        }
      } else {
        console.log("MG, HL");
      }
    } else if (nowDay > storeDay) {
      if (nowHour >= storeHour) {
        if (nowMinute > storeMinute) {
          console.log("joke should change");
          // localStorage.setItem('JOTD', set new joke here Pl and setup, and set current as yesterdays joke )
          callJoke()
        } else {
          console.log("MS, DG, HG/E , ML ");
        }
      } else {
        console.log("MS, DG, HL");
      }
    } else {
      console.log("MS, DL");
    }
  }
} 



checkTime();

for (let index = 0; index < populateButts.length; index++) {
  let answer = "";
  let joke = "";
  let jotdPunchline = document.getElementById("joke-0");
  let jotdAns = document.getElementById("joke-1");
  const element = populateButts[index];
  element.addEventListener("click", function () {
    // console.log(element, index);
    if (index === 0) {
      joke = document.getElementById("joke-2");
      answer = document.getElementById("joke-3");
      var currentJotdPl = jotdPunchline.innerText;
      var currentJotdAns = jotdAns.innerText;
      jotdPunchline.innerText = joke.innerText;
      jotdAns.innerText = answer.innerText;
      // console.log(currentJotdAns, currentJotdPl);
      joke.innerText = currentJotdPl;
      answer.innerText = currentJotdAns;
    } else if (index === 1) {
      joke = document.getElementById("joke-4");
      answer = document.getElementById("joke-5");
      var currentJotdPl = jotdPunchline.innerText;
      var currentJotdAns = jotdAns.innerText;
      jotdPunchline.innerText = joke.innerText;
      jotdAns.innerText = answer.innerText;
      // console.log(currentJotdAns, currentJotdPl);
      joke.innerText = currentJotdPl;
      answer.innerText = currentJotdAns;
    } else {
      joke = document.getElementById("joke-6");
      answer = document.getElementById("joke-7");
      var currentJotdPl = jotdPunchline.innerText;
      var currentJotdAns = jotdAns.innerText;
      jotdPunchline.innerText = joke.innerText;
      jotdAns.innerText = answer.innerText;
      // console.log(currentJotdAns, currentJotdPl);
      joke.innerText = currentJotdPl;
      answer.innerText = currentJotdAns;
    }
  });
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
  transStr = toBeTransArr.join(" | ");
  console.log(transStr);
  settings.data.q = transStr
}
// try seperating by Array.join()

function validate() {
  var card = document.getElementById("languages");
  if (card.selectedIndex == 0) {
    console.log("select one answer");
  } else {
    var selectedText = card.options[card.selectedIndex].text;
    // console.log(selectedText);
  }
}

function fillJokes() {
  let ind1 = Math.floor(Math.random() * 14);
  let ind2 = Math.floor(Math.random() * (14 - 14) + 14);
  let ind3 = Math.floor(Math.random() * (14 - 28) + 28);
  let joke1 = document.getElementById("joke-2");
  let ans1 = document.getElementById("joke-3");
  let joke2 = document.getElementById("joke-4");
  let ans2 = document.getElementById("joke-5");
  let joke3 = document.getElementById("joke-6");
  let ans3 = document.getElementById("joke-7");
  joke1.innerText = jokeArr[ind1];
  ans1.innerText = answerArr[ind1];
  joke2.innerText = jokeArr[ind2];
  ans2.innerText = answerArr[ind2];
  joke3.innerText = jokeArr[ind3];
  ans3.innerText = answerArr[ind3];
  // i know i can just call math random 3 times but i feel its easier this way as i dont need to check if any jokes match
}


  // console.log(toBeTransArr);


let yesButt = document.getElementById('yesterButt')
yesButt.addEventListener('click', function(){
  let yesJ = document.getElementById('yesterdaysJoke') 
  let yesA = document.getElementById('yesterdaysAnswer')
  let yesAns = localStorage.getItem('yesSet')
  let yesJokes = localStorage.getItem('yesJoke')
  yesJ.innerText = yesAns
  yesA.innerText = yesJokes
})

$(document).ready(function () {  
  fillJokes();
  for (let indx = 0; indx < jokePlacementArr.length; indx++) {
    const element = jokePlacementArr[indx];
    toBeTransArr[indx] = jokePlacementArr[indx].innerHTML;}
  makestr();
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
  callJoke()
  $.ajax(settings).done(function (response) {
    console.log(response);
    var translatedText = response.data.translations[0].translatedText;
    updatePlaceholders(translatedText);
  });
}
function updatePlaceholders(updateString) {
  var comp = updateString.split("|");
  // console.log(comp);
  for (let index = 0; index < comp.length; index++) {
    const element = comp[index].trim();
    // console.log(element);
    translationArr[index] = element;
    // console.log(translationArr);
  }
  for (let index = 0; index < translationArr.length; index++) {
    const element = translationArr[index];
    // console.log(element);
    var jokey = document.getElementById(`joke-${index}`);
    jokey.innerText = element;
  }
}
localStorage.setItem('jotdSetup', "I absolutely love and admire the unintellignt, overweight, yellowish-orange skinned man with the bad combover covering his baldness who has had his finger on the nuclear button all these years...")
localStorage.setItem('jotdPL', "Wait... I was talking about Homer Simpson, who did you think I meant?")
setInterval(checkTime, 5000);
