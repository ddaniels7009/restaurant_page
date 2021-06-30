import { homepage } from "./homepage";

// Module to create website homepage
const menuPage = (function () {

    const middleSection = homepage.middleSection;

    // Function to create website homepage.
    function createMenuPage() {


        // Create Middle Section and append to content
        middleSection.classList.add('middle');
        content.appendChild(middleSection);

        //Add Image
        const image = document.createElement('img');
        image.src = '/src/logo.png'
        image.classList.add('logo');
        middleSection.appendChild(image);

        // Add text to middle section
        const middleText = document.createElement('div');
        middleSection.appendChild(middleText);
        middleText.classList.add('middleText');
        middleText.innerText = "Put the menu here"

    }

    return { createMenuPage }

})();

export { menuPage }