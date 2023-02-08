//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: drinks.js
// Description: This is the drinks page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LoadDrinksPage(){
    console.log("The drinks page has loaded"); // Testing
    const content = document.querySelector('#content');
    content.classList.remove('home-page-background');
    content.classList.remove('menu-page-background');
    content.classList.remove('about-us-page-background');
    content.classList.remove('contact-us-page-background');
    
    content.classList.add('drinks-page-background');
}

export default LoadDrinksPage;