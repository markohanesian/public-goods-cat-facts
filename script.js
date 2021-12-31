// pop-up with delay
function delayedModalPopup() {
    setTimeout(() => {
        document.getElementById('right-mid').style.display = "block";
    }, 3000)
}

delayedModalPopup();

// get facts button
function displayCatFacts() {
    // get list of cats 
    const response = fetch('https://cat-fact.herokuapp.com/facts', {method: 'post'})
    .then(response => response.json())
        .then(data => console.log(data));
    document.createTextNode(response)
}

displayCatFacts();