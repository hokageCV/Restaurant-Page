function summonContactPage(){
    const contactContainer = document.createElement('div');
    contactContainer.classList.add("contact-page");

    const line = document.createElement('h4');
    line.textContent = ("कोनोहा नगर , फकौली बाज़ार")
    contactContainer.appendChild(line);

    const para = document.createElement('p');
    para.textContent = ("वहां एक ही खाने की दुकान है, आओगे तो पता चल जायेगा। ")
    contactContainer.appendChild(para);

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(contactContainer);
}

export {summonContactPage };