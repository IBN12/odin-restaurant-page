//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: menu.js
// Description: This is the menu page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import americanStyleBurger from "../dist/images/American-Style-Burger.png";
import thaiStyleTeriyakiPlate from "../dist/images/Thai-Style-Teriyaki-Plate.png";
import italianStyleFettuccineAlfredo from "../dist/images/Italian-Style-Fettuccine-Alfredo.png";
import jamaicanStyleJerkChicken from "../dist/images/Jamaican-Style-Jerk-Chicken.png";
import manakishZaatarStyleDish from "../dist/images/Manakish-Za'atar-Style-Dish.png";
import creoleStyleJambalaya from "../dist/images/Creole-Style-Jambalaya.png";

// MenuItems Module: Will create item containers in the menu content section.
const CreateItems= (() => {
    // createItems(): Creates the items for the menu.
    const createItems = (menuContent) =>{
        for (let i = 0; i < 6; i++)
        {
            const menuItems = document.createElement('div');
            createRows(menuItems);
            menuContent.appendChild(menuItems);
        }
    }
    
    // createRows(): Creates the rows for each menu item on the menu.
    const createRows = (menuItems) => {
        for (let i = 0; i < 3; i++)
        {
            const rows = document.createElement('div');
            menuItems.appendChild(rows);
        }
    }

    return {createItems};
})();

// RemovePreviousModuleContent(): Will remove the content from the previous module.
function RemovePreviousModuleContent(){
    // Remove any content from the last module's main content section.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren();

    // Remove the current module tab from the last module that the user was on.
    if (document.querySelector('#home-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#home-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#drinks-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#drinks-button').classList.remove('current-module-tab');
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

    const menuButton = document.querySelector('#menu-button');
    menuButton.classList.add('current-module-tab');
    
    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');
    CreateItems.createItems(menuContent);
    
    // Menu Item One: American Style Burger
    menuContent.childNodes[0].childNodes[0].textContent = "American Style Burger";
    const menuItemImageOne = document.createElement('img');
    menuItemImageOne.src = americanStyleBurger;
    menuContent.childNodes[0].childNodes[1].appendChild(menuItemImageOne);
    menuContent.childNodes[0].childNodes[2].textContent = '$10.99';

    // Menu Item Two: Thai Style Teriyaki Plate
    menuContent.childNodes[1].childNodes[0].textContent = "Thai Style Teriyaki Plate";
    const menuItemImageTwo = document.createElement('img');
    menuItemImageTwo.src = thaiStyleTeriyakiPlate;
    menuContent.childNodes[1].childNodes[1].appendChild(menuItemImageTwo);
    menuContent.childNodes[1].childNodes[2].textContent = '$12.39';

    // Menu Item Three: Italian Style Fettuccine Alfredo with Chicken Plate
    menuContent.childNodes[2].childNodes[0].textContent = "Italian Style Fettuccine Alfredo";
    const menuItemImageThree = document.createElement('img');
    menuItemImageThree.src = italianStyleFettuccineAlfredo;
    menuContent.childNodes[2].childNodes[1].appendChild(menuItemImageThree);
    menuContent.childNodes[2].childNodes[2].textContent = '$11.88';

    // Menu Item Four: Levantine Style Manakish with Za'atar Plate
    menuContent.childNodes[3].childNodes[0].textContent = "Levantine Style Manakish with Za'atar";
    const menuItemImageFour = document.createElement('img');
    menuItemImageFour.src = manakishZaatarStyleDish;
    menuContent.childNodes[3].childNodes[1].appendChild(menuItemImageFour);
    menuContent.childNodes[3].childNodes[2].textContent = "$14.78";

    // Menu Item Five: Creole Style Jambalaya Dish
    menuContent.childNodes[4].childNodes[0].textContent = "Creole Style Jambalaya";
    const menuItemImageFive = document.createElement('img');
    menuItemImageFive.src = creoleStyleJambalaya;
    menuContent.childNodes[4].childNodes[1].appendChild(menuItemImageFive);
    menuContent.childNodes[4].childNodes[2].textContent = "$15.00";

    // Menu Item Six: Jamaican Style Jerk Chicken Plate
    menuContent.childNodes[5].childNodes[0]. textContent = "Jamaican Style Jerk Chicken with Rice";
    const menuItemImageSix = document.createElement("img");
    menuItemImageSix.src = jamaicanStyleJerkChicken;
    menuContent.childNodes[5].childNodes[1].appendChild(menuItemImageSix);
    menuContent.childNodes[5].childNodes[2].textContent = "$12.78";

    mainModuleContent.appendChild(menuContent);
}

// LoadMenuPage(): Loads all the methods needed for the module.
function LoadMenuPage(){
    RemovePreviousModuleContent();

    AddCurrentModuleContent(); 
}

export default LoadMenuPage;