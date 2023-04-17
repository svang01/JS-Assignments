// Get the Header Element
const header = document.getElementsByTagName('header')[0];
console.log(header);

//Get all the section elements
const section = document.getElementsByTagName('section');
console.log(section);

// Get the section element with class="current"
const current = document.getElementsByClassName('current');
console.log(current)

// Get the section that comes after the current section
const nextCurrent = document.querySelector ('section.current'); 
console.log(nextCurrent);

// Get the h2 node from the section before the 'current' section
const prevSection = nextCurrent.previousElementSibling;
console.log(prevSection);

// Get the div that contains the section that has an h2 with a class of 'highlight'
const highlight = document.querySelector('h2.highlight');
const div = highlight.parentElement.parentElement;
console.log(div);

// Get all the sections that contain an H2 (using a single statement);
const h2 = document.getElementsByTagName("h2");
console.log(h2)





















