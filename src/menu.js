//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: menu.js
// Description: This is the menu page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// removeCurrentModuleContent(): Will remove the conten from the last module.
function RemoveCurrentModuleContent(){
    // Node reference for the contant section.
    const content = document.querySelector('#content');

    // Remove any background from the other modules.
    content.classList.remove('home-page-background');
    content.classList.remove('drinks-page-background');
    content.classList.remove('about-us-page-background');
    content.classList.remove('contact-us-page-background');

    // Remove any content from the last module.
    const mainContent = document.querySelector('.main-module-content');
    mainContent.replaceChildren();

    const homeButton = document.querySelector('#home-button');
    homeButton.classList.remove('current-module-tab');
}

function AddCurrentModuleContent(){
    const menuButton = document.querySelector('#menu-button');
    menuButton.classList.add('current-module-tab');

    // Add the menu background to the menu module.
    content.classList.add('menu-page-background');

}

// LoadMenuPage(): Load the menu page from the menu tab.
function LoadMenuPage(){
    console.log("The menu page has loaded"); // Testing

    AddCurrentModuleContent(); 


    RemoveCurrentModuleContent(); // Will remove the current content from the last module.
}

export default LoadMenuPage;