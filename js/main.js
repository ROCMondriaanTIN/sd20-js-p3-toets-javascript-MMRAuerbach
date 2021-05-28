console.log("main.js file loaded");
/* 
  Zorg ervoor dat je goed en duidelijke code gebruikt.
  Je gebruikt altijd oplossingen die zo efficient/ goed
  mogelijk gecodeerd worden.
*/

/**
 * Opdracht 1
 */
//Eerst ophalen van de button
const firstButton = document.querySelector('.firstbutton');

//Als button bestaat gaan we eventlistner toevoegen
if (firstButton) {
  firstButton.addEventListener('click', function() {
    const userName = erprompt('Wat is je naam?');
    console.log(userName);
  })
}

/**
 * Opdracht 2
 */
//Ophalen van alle items die je wilt laten zien
const showItems = document.querySelectorAll('.showitem');

//For loop om door alle items te lopen (if niet nodig want het is een querySelectorAll)
for (let i = 0; i < showItems.length; i++) {
  alert(`Item ${i+1} is ${showItems[i].textContent}`);
}

/**
 * Opdracht 3
 */
//Function to change style
function assignmentThreeFn() {
  //added .change_me to CSS file
  articleThree.classList.toggle('change_me');
}

//Get the article (added assign-three-article class to correct element)
const articleThree = document.querySelector('.assign-three-article');
const changeButtonThree = document.querySelector('.button-three');

//If class/ element exists, go for it
if (articleThree) {
  //If article exists, then button exists so no need to check that
  changeButtonThree.addEventListener('click', assignmentThreeFn);
}

/**
 * Opdracht 4
 */
//empty array variable
const names = [ ];
//Added buttons, input and article
const addNameBtn = document.querySelector('.add-name-button');
const delNameBtn = document.querySelector('.del-name-button');
const addNameInput = document.querySelector('.add-name-input')
const showArticle = document.querySelector('.show_names');

//If addNameBtn exists then we can add eventlistners and stuff
if (addNameBtn) {
  addNameBtn.addEventListener('click', function() {
    const addName = addNameInput.value;
    names.push(addName);
    showNames();
  });

  delNameBtn.addEventListener('click', function() {
    names.pop();
    showNames();
  });
}

//function to show names in the article
function showNames() {
  showArticle.innerHTML = '';
  for (let i = 0; i < names.length; i++) {
    showArticle.innerHTML += `<p> ${names[i]} <p>`;
  }
}