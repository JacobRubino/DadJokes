const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8d76cdcb11msh971a68b9bacde6ap19281ajsn6ecf6b164def',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};


function testDadJoke() {
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
testDadJoke();