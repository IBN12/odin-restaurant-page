//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: menu.js
// Description: This is the menu page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LoadMenuPage(): 
function LoadMenuPage(){
    console.log("The menu page has loaded"); // Testing
    const content = document.querySelector('#content');
    content.classList.remove('home-page-background');
    content.classList.add('menu-page-background');
}

export default LoadMenuPage;