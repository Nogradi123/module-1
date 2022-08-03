
const randomNameButton = document.querySelector('#nameRandomizerButton');
const nameDisplay = document.querySelector('div#nameDisplay h3.theName')
const listOfNames = [...document.querySelectorAll('#nameDisplay ul li')].map(name => name.innerHtml);


// These are 2 methods of converting nodeList into an array so that you may loop through them using the built in js loop method (ie .filter() .forEach() .map())

// const mylistOfNamesArrayMethod1 = Array.from(listOfNames);
// const mylistOfNamesArrayMethod1 = [...listOfNames];

const randomNum = (maxLimit) => {
    return Math.floor(Math.random() * maxLimit)
};


randomNameButton.addEventListener('click', () => {
    // console.log("button")
    nameDisplay.innerHTML = randomNum(listOfNames.length);
})


window.addEventListener('load' , () => {
    console.log("Connected :" , {randomNameButton, listOfNames, nameDisplay});

})

// To check if script file is linked properly
// window.onload = () => {
//   console.log("Connected on load")
// }