//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: about-us.js
// Description: This is the about us page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// RemovePreviousModuleContent(): Will remove content from the previous module.
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
    else if (document.querySelector('#drinks-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#drinks-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#contact-us-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#contact-us-button').classList.remove('current-module-tab');
    }
}

// AddCurrentModuleContent(): Will add content to the current module. 
function AddCurrentModuleContent(){
    const aboutUsButton = document.querySelector('#about-us-button');
    aboutUsButton.classList.add('current-module-tab');
}

// AboutUsContent(): Main content for the module.
function AboutUsContent(){
    console.log("About Us Content"); // Testing
} 

function LoadAboutUsPage(){
    console.log("The about us page has loaded"); // Testing
    RemovePreviousModuleContent();

    AddCurrentModuleContent();

    AboutUsContent();
}

export default LoadAboutUsPage;