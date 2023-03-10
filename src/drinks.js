//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: drinks.js
// Description: This is the drinks page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import sparklingWater from '../dist/images/Sparkling-Water.png';
import gingerAle from '../dist/images/Ginger-Ale.png';
import niepoortRubyPortWine from '../dist/images/Niepoort-Ruby-Port-Wine.png';
import redWine from '../dist/images/Red-Wine.png';
import soda from '../dist/images/Soda.png';
import milkShake from '../dist/images/Milk-Shake.png';

// CreateItems Module: Will create item containers in the drink content section.
const CreateItems = (()=>{
    // createItems(): Creates the items for the drink menu.
    const createItems = (drinksContent) => {
        for (let i = 0; i < 6; i++)
        {
            const drinkItems = document.createElement('div');
            createRows(drinkItems);
            drinksContent.appendChild(drinkItems);
        }
    }
    
    // createRows(): Creates the rows for each drink item on the drink menu.
    const createRows = (drinkItems) => {
        for (let i = 0; i < 3; i++)
        {
            const rows = document.createElement('div');
            drinkItems.appendChild(rows);
        }
    }

    return {createItems};
})();

// RemovePreviousModuleContent(): Will remove the content from the previous module.
function RemovePreviousModuleContent(){
    // Remove any content from the last modules main content section.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren();

    // Remove the current module tab from the last module that the user was on.
    if (document.querySelector('#home-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#home-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#menu-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#menu-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#about-us-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#about-us-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#contact-us-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#contact-us-button').classList.remove('current-module-tab');
    }
}

// AddCurrentModuleContent(): Will add content to the current module.
function AddCurrentModuleContent(){
    const mainModuleContent = document.querySelector('.main-module-content');

    const drinksButton = document.querySelector('#drinks-button');
    drinksButton.classList.add('current-module-tab');

    const drinksContent = document.createElement('div');
    drinksContent.setAttribute('id', 'drinks-content');
    CreateItems.createItems(drinksContent);

    // Drink Item One: Sparkling Water
    drinksContent.childNodes[0].childNodes[0].textContent = "Sparkling Water"; 
    const drinkItemImageOne = document.createElement('img');
    drinkItemImageOne.src = sparklingWater;
    drinksContent.childNodes[0].childNodes[1].appendChild(drinkItemImageOne);
    drinksContent.childNodes[0].childNodes[2].textContent = "$2.23";

    // Drink Item Two: Ginger Ale
    drinksContent.childNodes[1].childNodes[0].textContent = "Ginger Ale";
    const drinkItemImageTwo = document.createElement('img');
    drinkItemImageTwo.src = gingerAle;
    drinksContent.childNodes[1].childNodes[1].appendChild(drinkItemImageTwo);
    drinksContent.childNodes[1].childNodes[2].textContent = "$3.88";

    // Drink Item Three: Niepoort Ruby Port
    drinksContent.childNodes[2].childNodes[0].textContent = "Niepoort Ruby Port";
    const drinkItemImageThree = document.createElement('img');
    drinkItemImageThree.src = niepoortRubyPortWine;
    drinksContent.childNodes[2].childNodes[1].appendChild(drinkItemImageThree);
    drinksContent.childNodes[2].childNodes[2].textContent = "$11.99";

    // Drink Item Four: Red Wine
    drinksContent.childNodes[3].childNodes[0].textContent = "Red Wine"; 
    const drinkItemImageFour = document.createElement('img');
    drinkItemImageFour.src = redWine;
    drinksContent.childNodes[3].childNodes[1].appendChild(drinkItemImageFour);
    drinksContent.childNodes[3].childNodes[2].textContent = "$10.00"; 

    // Drink Item Five: Soda
    drinksContent.childNodes[4].childNodes[0].textContent = "Soda";
    const drinkItemImageFive = document.createElement('img');
    drinkItemImageFive.src = soda;
    drinksContent.childNodes[4].childNodes[1].appendChild(drinkItemImageFive);
    drinksContent.childNodes[4].childNodes[2].textContent = "$3.60";

    // Drink Item Six: Milk Shake
    drinksContent.childNodes[5].childNodes[0].textContent = "Milk Shake";
    const drinkItemImageSix = document.createElement('img');
    drinkItemImageSix.src = milkShake;
    drinksContent.childNodes[5].childNodes[1].appendChild(drinkItemImageSix);
    drinksContent.childNodes[5].childNodes[2].textContent = "$5.44";

    mainModuleContent.appendChild(drinksContent);
}

// LoadDrinksPage(): Loads all the methods needed for the module. 
function LoadDrinksPage(){
    RemovePreviousModuleContent();

    AddCurrentModuleContent();
}

export default LoadDrinksPage;