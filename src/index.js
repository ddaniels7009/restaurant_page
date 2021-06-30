// Import module from homepage.js
import { contactPage } from './contact';
import { homepage } from './homepage';
import { menuPage } from './menu';

// Module for NavBar
const nav = (function () {
    
    //Create Navbar
    const navbar = document.createElement('div');
    navbar.classList.add('nav')

    // Create UL element
    const navLinks = document.createElement('ul');
    navbar.appendChild(navLinks);

    // Create li elements and link them to the navbar
    const homeLink = document.createElement('li');
    homeLink.innerText = "Home";
    homeLink.addEventListener('click', function() {homepage.deletePageContents(); homepage.createHomepage(); })

    const menuLink = document.createElement('li');
    menuLink.innerText = "Menu";
    menuLink.addEventListener('click', function() { homepage.deletePageContents();  menuPage.createMenuPage(); })

    const contactLink = document.createElement('li');
    contactLink.innerText = "Contact";
    contactLink.addEventListener('click', function() { homepage.deletePageContents(); contactPage.createContactPage(); })

    // Append li to ul
    navLinks.appendChild(homeLink);
    navLinks.appendChild(menuLink);
    navLinks.appendChild(contactLink);

    // Append Navbar to content div
    homepage.content.appendChild(navbar);

})();

// Call create homepage function from homepage.js
homepage.createHomepage();

