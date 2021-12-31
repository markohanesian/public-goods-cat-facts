// get list of cats 
fetch('https://cat-fact.herokuapp.com').then(function (response) {
    // successful api call
    return response.json();
}).then(function (data) {
    // JSON data from call 
    console.log(data)
}).catch(function (err) {
    // error
    console.warn('api call error', err);
});

