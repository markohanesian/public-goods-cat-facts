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

// pop-up with delay
function delayedModalPopup() {
    setTimeout(() => {
        document.getElementById('right-mid').style.display = "block";
    }, 3000)
}

delayedModalPopup();