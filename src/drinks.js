//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: drinks.js
// Description: This is the drinks page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DrinkMenu Module: Will create a menu for all the drinks.
const DrinkMenu = (()=>{

    // addDrinks(): Will add drinks to the drinks content section. 
    const addDrinks = (drinksContent) =>{
        for (let i = 0; i < 6; i++)
        {
            const drinkItems = document.createElement('div');
            addRows(drinkItems);
            drinksContent.appendChild(drinkItems);
        }
    }

    // addRows(): Will add rows to each drink item section.
    const addRows = (drinkItems) =>{
        for (let i = 0; i < 3; i++)
        {
            const rows = document.createElement('div');
            drinkItems.appendChild(rows);
        }
    }

    return {addDrinks};
})();

// RemovePreviousModuleContent(): Will remove the content from the previous module.
function RemovePreviousModuleContent(){
    // Remove any content from the last modules main content section.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren();

    // Remove the current module tab from the current module that the user is on.
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
    const drinksButton = document.querySelector('#drinks-button');
    drinksButton.classList.add('current-module-tab');
}

// DrinksPageContent(): Main content for the module. 
function DrinksContent(){
    const mainModuleContent = document.querySelector('.main-module-content');

    const drinksContent = document.createElement('div');
    drinksContent.setAttribute('id', 'drinks-content');

    DrinkMenu.addDrinks(drinksContent);

    // Drink Item One: Sparkling Water
    drinksContent.childNodes[0].childNodes[0].textContent = "Sparkling Water"; 
    const drinkItemImageOne = document.createElement('img');
    drinkItemImageOne.src = '../images/Sparkling-Water.png';
    drinksContent.childNodes[0].childNodes[1].appendChild(drinkItemImageOne);
    drinksContent.childNodes[0].childNodes[2].textContent = "$2.23";
    
    drinksContent.childNodes[1].childNodes[0].textContent = "Ginger Ale";
    const drinkItemImageTwo = document.createElement('img');
    drinkItemImageTwo.src = '../images/Ginger-Ale.png';
    drinksContent.childNodes[1].childNodes[1].appendChild(drinkItemImageTwo);
    drinksContent.childNodes[1].childNodes[2].textContent = "$3.88";

    drinksContent.childNodes[2].childNodes[0].textContent = "Niepoort Ruby Port";
    const drinkItemImageThree = document.createElement('img');
    drinkItemImageThree.src = '../images/Niepoort-Ruby-Port-Wine.png';
    drinksContent.childNodes[2].childNodes[1].appendChild(drinkItemImageThree);
    drinksContent.childNodes[2].childNodes[2].textContent = "$11.99";

    drinksContent.childNodes[3].childNodes[0].textContent = "Red Wine"; 
    const drinkItemImageFour = document.createElement('img');
    drinkItemImageFour.src = '../images/Red-Wine.png';
    drinksContent.childNodes[3].childNodes[1].appendChild(drinkItemImageFour);
    drinksContent.childNodes[3].childNodes[2].textContent = "$10.00"; 

    drinksContent.childNodes[4].childNodes[0].textContent = "Soda";
    const drinkItemImageFive = document.createElement('img');
    drinkItemImageFive.src = '../images/Soda.png';
    drinksContent.childNodes[4].childNodes[1].appendChild(drinkItemImageFive);
    drinksContent.childNodes[4].childNodes[2].textContent = "$3.60";

    drinksContent.childNodes[5].childNodes[0].textContent = "Milk Shake";
    const drinkItemImageSix = document.createElement('img');
    drinkItemImageSix.src = '../images/Milk-Shake.png';
    drinksContent.childNodes[5].childNodes[1].appendChild(drinkItemImageSix);
    drinksContent.childNodes[5].childNodes[2].textContent = "$5.44";

    mainModuleContent.appendChild(drinksContent);
}

function LoadDrinksPage(){
    console.log("The drinks page has loaded"); // Testing

    RemovePreviousModuleContent();

    AddCurrentModuleContent();
    
    DrinksContent();
}

export default LoadDrinksPage;