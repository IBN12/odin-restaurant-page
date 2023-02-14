//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: home.js
// Description: This is the home page content for this entie application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CreateItems Module: Creates item containers in the homepage content section.
const CreateItems = (() => {
    const createItems = (homepageContent) => {
        for (let i = 0; i < 2; i++)
        {
            const homepageContentItems = document.createElement('div');
            homepageContent.appendChild(homepageContentItems); 
        }
    }
    
    return {createItems};
})();

// RemoveCurrentModuleContent(): Will remove the content from the previous module.
function RemovePreviousModuleContent(){
    // Node reference for the main module content for each tab.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren(); // Remove any existing  DOM children if present.

    // Remove the current module tab from the last module that the user was on.
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

// AddCurrentModuleContent(): Will add content to the current module. 
function AddCurrentModuleContent(){
    const mainModuleContent = document.querySelector('.main-module-content');

    const homeButton = document.querySelector('#home-button');
    homeButton.classList.add('current-module-tab');

    const homepageContent = document.createElement('div');
    homepageContent.setAttribute('id', 'homepage-content');
    CreateItems.createItems(homepageContent);

    // Title:
    homepageContent.childNodes[0].textContent = "Mosi's Restaurant";

    // Details:
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    para1.textContent = `Mosi's Restaurant is one of the finest eateries in the Portland, Oregon metropolitan area.
    Our restaurant consists of American style and international cuisines.`;
    para2.textContent = `Notable international cuisines such as Italian Fettuccine Alfredo dishes with chicken or shrimp; Thai
    Teriyaki plate with optional savory sauces poured over chicken or pork; delicious Levantine style Manakish dishes with cheese
    toppings or Za'atar spice on Middle Eastern flatbread.`;
    para3.textContent = `We also provide a wide selection of drinks from sparkling waters, ginger ales, and great tasting wines. If you
    are into a variety of different cuisines and amazing drinks in a causal elegant setting, then Mosi's Restaurant might be the place
    for you.`
    homepageContent.childNodes[1].appendChild(para1);
    homepageContent.childNodes[1].appendChild(para2);
    homepageContent.childNodes[1].appendChild(para3);

    mainModuleContent.appendChild(homepageContent);
}

// LoadHomePage(): Loads all the methods needed for the module.
function LoadHomePage() {
    RemovePreviousModuleContent();

    AddCurrentModuleContent();
}

export default LoadHomePage;