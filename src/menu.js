import { homepage } from "./homepage";

// Module to create website homepage
const menuPage = (function () {

    //Array to hold the menu item divs
    const list = [];

    // Function to create website homepage.
    function createMenuPage() {



        //Create page holder
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menuContainer');

        // Add div for item names
        const itemNames = document.createElement('div');
        itemNames.classList.add('itemNames');
        menuContainer.appendChild(itemNames);

        //1
        const item1 = document.createElement('div');
        item1.classList.add('item');
        item1.innerText = "Bacon Burger";
        itemNames.appendChild(item1);

        //2
        const item2 = document.createElement('div');
        item2.classList.add('item');
        item2.innerText = "Mushroom Burger";
        itemNames.appendChild(item2);

        //3
        const item3 = document.createElement('div');
        item3.classList.add('item');
        item3.innerText = "Banzai Burger";
        itemNames.appendChild(item3);

        // Add text to middle section
        const middleText = document.createElement('div');
        menuContainer.appendChild(middleText);
        middleText.classList.add('menuContainerInner');

        // Loop to create specified number of menu items
        for (let i = 0; i < 3; i++) {
            let menuItem = document.createElement('div');
            menuItem.classList.add('menuItems');
            middleText.appendChild(menuItem);
            list[i] = menuItem;
        }


        //Add Image1
        const image1 = document.createElement('img');
        image1.src = '/src/bacon-burger.jpg'
        image1.classList.add('menuPic');
        list[0].appendChild(image1);

        //Add Image2
        const image2 = document.createElement('img');
        image2.src = '/src/mushroom-burger.jpeg'
        image2.classList.add('menuPic');
        list[1].appendChild(image2);

        //Add Image3
        const image3 = document.createElement('img');
        image3.src = '/src/banzai.png'
        image3.classList.add('menuPic');
        list[2].appendChild(image3);

        // Append the menu container to the main content container
        content.appendChild(menuContainer);

        // Add footer to main content container
        let footer = document.createElement('div');
        footer.classList.add('footer');
        content.appendChild(footer);



    }

    return { createMenuPage }

})();

export { menuPage }