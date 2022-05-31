const menu = [
    {
        name: "छास",
        description: "One of the best drinks in the Universe",
        price: "₹ 10/-",
    },
    {
        name: "दाल बाटी",
        description: "Oh, uh, this is my Doc, Uncle, Brown. You're George McFly. Um, well it's a delorean, right? Wait a minute, wait a minute, Doc, are you telling me that you built a time machine out of a delorean. Who do you think, the Libyans.",
        price: "₹ 120/-",
    },
    {
        name: "लिट्टी चोखा",
        description: "Which one's your pop? No no no this sucker's electrical, but I need a nuclear reaction to generate the one point twenty-one gigawatts of electricity that I need. He's a very strange young man. When could weathermen predict the weather, let alone the future. Right, I got it.",
        price: "₹ 60/-",
    },
    {
        name: "डोसा",
        description: "Cambrian explosion at the edge of forever vanquish the impossible not a sunrise but a galaxyrise kindling the energy hidden in matter courage of our questions? Rich in heavy atoms concept of the number one how far away Drake Equation dream of the mind's eye citizens of distant epochs? The only home we've ever known Euclid venture bits of moving fluff Sea of Tranquility bits of moving fluff and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
        price: "₹40/-",
    },
    {
        name: "खिचड़ी, कढ़ी, बाजरा रोटी",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        price: "₹60/-",
    },
    {
        name: "oats",
        description: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
        price: "₹30/-",
    },
];

// //first try
function summonMenuPage(){
    let menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container");

    menu.forEach( (khavanu)=>{
        let menuItem = document.createElement('div');
        menuItem.classList.add("menu-item");

        let name = document.createElement('h6');
        name.textContent = (khavanu.name);
        menuItem.appendChild(name);

        let desc = document.createElement('p');
        desc.textContent = (khavanu.description);
        menuItem.appendChild(desc);

        let price = document.createElement('p');
        price.textContent = (khavanu.price);
        price.classList.add('price');
        menuItem.appendChild(price);


        menuContainer.appendChild(menuItem);

    })
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(menuContainer);

}


export { summonMenuPage };