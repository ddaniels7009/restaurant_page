import { homepage } from "./homepage";

// Module to create website contact page
const contactPage = (function () {

    // Function to create website contact page.
    function createContactPage() {

        //Create page holder
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('middleContact');

        //Add Image
        const image = document.createElement('img');
        image.src = '/src/logo.png'
        image.classList.add('logo');
        contactContainer.appendChild(image);

        // Add text to middle section
        const middleText = document.createElement('div');
        contactContainer.appendChild(middleText);
        middleText.classList.add('middleText');
        middleText.innerText = "Address: 701 E Harmony Rd, Ft Collins, CO\n Phone: (555)223-0111\n Hours of Operation: 11AM - 10PM"

        // Append the menu container to the main content container
        content.appendChild(contactContainer);

        // Add footer
        const footer = document.createElement('div');
        footer.classList.add('footer');
        content.appendChild(footer);
    }

    return { createContactPage }

})();

export { contactPage }