//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: initial-page-load.js
// Description: Content from the application will be loaded from this file. 
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function NavSection(){
    // Node reference for the main content section.
    const content = document.querySelector('#content');
    console.log(content); // Testing
    content.setAttribute('style', 'border: 1px solid red;');

    const navSection = document.createElement('div'); 
    navSection.classList.add('navigation-content');

    // Menu: Menu link
    const menu = document.createElement('button');
    menu.setAttribute('id', 'menu-button');
    menu.textContent = 'Menu';

    // Home: Home Link
    const home = document.createElement('button');
    home.setAttribute('id', 'home-button');
    home.textContent = 'Home';

    navSection.appendChild(home);
    navSection.appendChild(menu);
    content.appendChild(navSection);
}

function InitialPageLoad(){
    NavSection();
}

export default InitialPageLoad;