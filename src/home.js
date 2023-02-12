//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: home.js
// Description: This is the home page content for this entie application.
// Notes: This module represents the home page:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// removeCurrentModuleContent():
function RemovePreviousModuleContent(){
    // Node reference for the main module content for each tab.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren(); // Remove any existing  DOM children if present.

    // Remove the current module tab from the current module that the user is on.
    if (document.querySelector('#menu-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#menu-button').classList.remove('current-module-tab');
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

// addCurrentModuleContent(): 
function AddCurrentModuleContent(){
    const homeButton = document.querySelector('#home-button');
    homeButton.classList.add('current-module-tab');
}

// HomePageContent():
function HomepageContent(){
    // Node reference for the main module content for each tab.
    const mainModuleContent = document.querySelector('.main-module-content');

    // Creating homepage content section that will be appended to the main module content. 
    const homepageContent = document.createElement('div');
    homepageContent.setAttribute('id', 'homepage-content');
    
    // Add 3 content containers to the homepage content section. 
    for (let i = 0; i < 3; i++)
    {
        const homepageContentItems = document.createElement('div');
        homepageContent.appendChild(homepageContentItems);
    }
    
    const image = document.createElement('img');
    homepageContent.childNodes[0].appendChild(image);

    homepageContent.childNodes[1].textContent = "Mosi's Restaurant";
    
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    para1.textContent = `Mosi's Restaurant is one of the finest eateries in the Portland, Oregon metropolitan area.
    Our restaurant consists of American style and international cuisines.`;
    para2.textContent = `Notable international cuisines such as Italian Fettuccine Alfredo dishes with chicken or shrimp; Thai
    Teriyaki plate with optional savory sauces poured over chicken or pork; delicious Lebanese style Manakish dishes with cheese
    toppings or Za'atar spice on Middle Eastern flatbread.`;
    para3.textContent = `We also provide a wide selection of drinks from sparkling waters, ginger ales, and great tasting wines. If you
    are into a variety of different cuisines and amazing drinks in a causal elegant setting, then Mosi's Restaurant might be the place
    for you.`
    homepageContent.childNodes[2].appendChild(para1);
    homepageContent.childNodes[2].appendChild(para2);
    homepageContent.childNodes[2].appendChild(para3);

    console.log(homepageContent); // Testing

    mainModuleContent.appendChild(homepageContent);
}

// LoadHomePage(): Function will load the home page by default.
function LoadHomePage() {
    console.log("The home page has loaded"); // Testing
    RemovePreviousModuleContent();

    AddCurrentModuleContent();

    HomepageContent();
}

export default LoadHomePage;