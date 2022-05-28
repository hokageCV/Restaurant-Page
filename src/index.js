import './style.css'

document.body.classList.add('backg');

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');

const heading = document.createElement('h1');
const textNode = document.createTextNode("work kare che bhai");
heading.classList.add('jiraiya');

heading.appendChild(textNode);
contentDiv.appendChild(heading);

document.body.appendChild(contentDiv);
console.log( "work kar raha hai, hey hey hey" );
console.log( contentDiv.getAttribute('id') );