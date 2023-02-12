//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: menu.js
// Description: This is the menu page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MenuItems Module: Will create a menu for all the meals. 
const Menu= (() => {
    console.log("The module MenuItems is initialized"); // Testing

    // addContent(): Function will add items to the menu content section.
    const addContent = (menuContent) =>{
        for (let i = 0; i < 6; i++)
        {
            const menuItems = document.createElement('div');
            addRows(menuItems);
            menuContent.appendChild(menuItems);
        }
    }
    
    // addRows(): Function will add rows to each menu item section.
    const addRows = (menuItem) => {
        for (let i = 0; i < 3; i++)
        {
            const menuItemRows = document.createElement('div');
            menuItem.appendChild(menuItemRows);
        }
    }

    return {addContent};
})();

// RemovePreviousModuleContent(): Will remove the content from the previous module.
function RemovePreviousModuleContent(){
    // Remove any content from the last module's main content section.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren();

    // Remove the current module tab from the current module that the user is on.
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
    const menuButton = document.querySelector('#menu-button');
    menuButton.classList.add('current-module-tab');
}

// MenuContent(): Main content for the module. 
function MenuContent(){
    const mainModuleContent = document.querySelector('.main-module-content');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');

    Menu.addContent(menuContent);

    // Menu Item One: American Style Burger
    menuContent.childNodes[0].childNodes[0].textContent = "American Style Burger";
    const menuItemImageOne = document.createElement('img');
    menuItemImageOne.src = '../images/American-Style-Burger.png';
    menuContent.childNodes[0].childNodes[1].appendChild(menuItemImageOne);
    menuContent.childNodes[0].childNodes[2].textContent = '$10.99';

    // Menu Item Two: Thai Style Teriyaki Plate
    menuContent.childNodes[1].childNodes[0].textContent = "Thai Style Teriyaki Plate";
    const menuItemImageTwo = document.createElement('img');
    menuItemImageTwo.src = '../images/Thai-Style-Teriyaki-Plate.png';
    menuContent.childNodes[1].childNodes[1].appendChild(menuItemImageTwo);
    menuContent.childNodes[1].childNodes[2].textContent = '$12.39';

    // Menu Item Three: Italian Style Fettuccine Alfredo with Chicken Plate
    menuContent.childNodes[2].childNodes[0].textContent = "Italian Style Fettuccine Alfredo";
    const menuItemImageThree = document.createElement('img');
    menuItemImageThree.src = '../images/Italian-Style-Fettuccine-Alfredo.png';
    menuContent.childNodes[2].childNodes[1].appendChild(menuItemImageThree);
    menuContent.childNodes[2].childNodes[2].textContent = '$11.88';

    // Menu Item Four: Levantine Style Manakish with Za'atar Plate
    menuContent.childNodes[3].childNodes[0].textContent = "Levantine Style Manakish with Za'atar";
    const menuItemImageFour = document.createElement('img');
    menuItemImageFour.src = "../images/Manakish-Za'atar-Style-Dish.png"; 
    menuContent.childNodes[3].childNodes[1].appendChild(menuItemImageFour);
    menuContent.childNodes[3].childNodes[2].textContent = "$14.78";

    // Menu Item Five: Creole Style Jambalaya Dish
    menuContent.childNodes[4].childNodes[0].textContent = "Creole Style Jambalaya";
    const menuItemImageFive = document.createElement('img');
    menuItemImageFive.src = "../images/Creole-Style-Jambalaya.png";
    menuContent.childNodes[4].childNodes[1].appendChild(menuItemImageFive);
    menuContent.childNodes[4].childNodes[2].textContent = "$15.00";

    // Menu Item Six: Jamaican Style Jerk Chicken Plate
    menuContent.childNodes[5].childNodes[0]. textContent = "Jamaican Style Jerk Chicken with Rice";
    const menuItemImageSix = document.createElement("img");
    menuItemImageSix.src = "../images/Jamaican-Style-Jerk-Chicken.png";
    menuContent.childNodes[5].childNodes[1].appendChild(menuItemImageSix);
    menuContent.childNodes[5].childNodes[2].textContent = "$12.78";

    mainModuleContent.appendChild(menuContent);
}

// LoadMenuPage(): Load the menu page from the menu tab.
function LoadMenuPage(){
    console.log("The menu page has loaded"); // Testing
    RemovePreviousModuleContent(); // Will remove the current content from the last module.

    AddCurrentModuleContent(); 

    MenuContent();
}

export default LoadMenuPage;