//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: contact-us.js
// Description: This is the contact us page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LoadContactUsPage() {
    console.log("The contact us page has loaded"); // Testing
    const content = document.querySelector('#content');
    content.classList.remove('home-page-background');
    content.classList.remove('menu-page-background');
    content.classList.remove('drinks-page-background');
    content.classList.remove('about-us-page-background');

    content.classList.add('contact-us-page-background');
}

export default LoadContactUsPage;