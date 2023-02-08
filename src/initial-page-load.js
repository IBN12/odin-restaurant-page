//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: initial-page-load.js
// Description: Content from the application will be loaded from this file. 
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NavSection(): Navigation section
function NavSection(){
    // Node reference for the main content section.
    const content = document.querySelector('#content');
    console.log(content); // Testing
    content.setAttribute('style', 'border: 1px solid red;');

    // Navigation Section: Will contain page links.
    const navSection = document.createElement('div'); 
    navSection.classList.add('navigation-content');

    // Home: Home link
    const home = document.createElement('button');
    const navSectionContentOne = document.createElement('div');
    home.setAttribute('id', 'home-button');
    home.classList.add('active-module');
    home.textContent = 'Home';
    navSectionContentOne.appendChild(home);

    // Menu: Menu link
    const menu = document.createElement('button');
    const navSectionContentTwo = document.createElement('div');
    menu.setAttribute('id', 'menu-button');
    menu.textContent = 'Menu';
    navSectionContentTwo.appendChild(menu);

    // Drinks: Drinks link
    const drinks = document.createElement('button');
    const navSectionContentThree = document.createElement('div');
    drinks.setAttribute('id', 'drinks-button');
    drinks.textContent = 'Drinks';
    navSectionContentThree.appendChild(drinks);

    // About Us: About Us link
    const aboutUs = document.createElement('button');
    const navSectionContentFour = document.createElement('div');
    aboutUs.setAttribute('id', 'about-us-button');
    aboutUs.textContent = 'About Us';
    navSectionContentFour.appendChild(aboutUs);

    // Contact Us: Contact Us link 
    const contactUs = document.createElement('button');
    const navSectionContentFive = document.createElement('div');
    contactUs.setAttribute('id', 'contact-us-button');
    contactUs.textContent = 'Contact Us';
    navSectionContentFive.appendChild(contactUs);

    // Logo: Restaurant logo
    const logo = document.createElement('div');
    logo.setAttribute('id', 'page-logo');
    logo.textContent = "Mosi's Restaurant";

    navSection.appendChild(navSectionContentOne);
    navSection.appendChild(navSectionContentTwo);
    navSection.appendChild(navSectionContentThree);
    navSection.appendChild(navSectionContentFour);
    navSection.appendChild(navSectionContentFive);
    navSection.appendChild(logo);
    content.appendChild(navSection);
}

// MainContent(): main content section for each module tab (module = page).
function MainContent(){
    const content = document.querySelector('#content');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-module-content');
    console.log(mainContent); // Testing

    content.appendChild(mainContent);
}

// Footer: 
function Footer(){
    const content = document.querySelector('#content');

    const footer = document.createElement('div');
    footer.classList.add('main-module-footer');
    footer.textContent = "Elegant Cutural Eatery"


    content.appendChild(footer);
}

// InitialPageLoad(): 
function InitialPageLoad(){
    console.log("The initial function has been called");
    NavSection();
    MainContent();
    Footer();
}

export default InitialPageLoad;