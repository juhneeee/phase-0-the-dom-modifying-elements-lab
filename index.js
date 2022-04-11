// Write your code here!
// const element = document.createElement("div");

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     li.textContent = (i + 1).toString();
//     ul.append(li)
// }

/* Enter the code to remove the node element here */
const main = document.querySelector('main')
main.remove()

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Johnny is the champion'

document.body.append(newHeader)