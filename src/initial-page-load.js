//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: initial-page-load.js
// Description: Content from the application will be loaded from this file. 
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CreateNavigationButton(): Will create module buttons as links in the navigation section. 
function CreateNavigationButton(moduleButton, idName, linkContent, navSection){
    const navSectionContent = document.createElement('div');

    moduleButton.setAttribute('id', idName);
    moduleButton.textContent = linkContent;

    navSectionContent.appendChild(moduleButton);
    navSection.appendChild(navSectionContent);
}

// CreateNavigationLogo(): Will create a logo in the navigation section. 
function CreateNavigationLogo(logo, idName, logoContent, navSection){
    logo.setAttribute('id', idName);
    logo.textContent = logoContent;

    navSection.appendChild(logo);
}

// MainContent(): Main content section for each module tab (module = page).
function MainContent(){
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-module-content');

    content.appendChild(mainContent);
}

// Footer: Footer content section for each module tab
function Footer(){
    const content = document.querySelector('#content');

    const footer = document.createElement('div');
    footer.classList.add('main-module-footer');
    footer.textContent = "Elegant Cutural Eatery"

    content.appendChild(footer);
}

// InitialPageLoad(): Loads all the initial methods and properties for entire content section.
function InitialPageLoad(){
    // Node Reference for the main content section.
    const content = document.querySelector('#content');

    // Navigation Section: Will contain page links.
    const navSection = document.createElement('div');
    navSection.classList.add('navigation-content');

    // Home Module Button:
    const home = document.createElement('button');
    CreateNavigationButton(home, 'home-button', 'Home', navSection);

    // Menu Module Button:
    const menu = document.createElement('button');
    CreateNavigationButton(menu, 'menu-button', 'Menu', navSection);

    // Drinks Module Button:
    const drinks = document.createElement('button'); 
    CreateNavigationButton(drinks, 'drinks-button', 'Drinks', navSection);

    // About Us Module Button: 
    const aboutUs = document.createElement('button');
    CreateNavigationButton(aboutUs, 'about-us-button', 'About Us', navSection);

    // Contact Us Module Button:
    const contactUs = document.createElement('button');
    CreateNavigationButton(contactUs, 'contact-us-button', 'Contact Us', navSection);

    // Restaurant Logo:
    const logo = document.createElement('div');
    CreateNavigationLogo(logo, 'page-logo', "Mosi's Restaurant", navSection);

    content.appendChild(navSection);

    MainContent();

    Footer();
}

export default InitialPageLoad;