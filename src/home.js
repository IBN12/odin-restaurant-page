//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: home.js
// Description: This is the home page content for this entie application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function HomePageBackground(){
    
}

// LoadHomePage(): Function will load the home page by default.
function LoadHomePage() {
    console.log("The home page has loaded"); // Testing
    const content = document.querySelector('#content');
    content.classList.remove('menu-page-background');
    content.classList.add('home-page-background');
}

export default LoadHomePage;