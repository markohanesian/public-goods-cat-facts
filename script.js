// get list of cats 
fetch('https://cat-fact.herokuapp.com').then(function (response) {
    // successful api call
    console.log('api call successful', response);
}).catch(function (err) {
    // error
    console.warn('api call error', err);
});

