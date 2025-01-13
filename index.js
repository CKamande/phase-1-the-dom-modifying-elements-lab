// Write your code here!

// 1. Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// 2. Create a new <h1> element and assign it to the variable 'newHeader'
const newHeader = document.createElement('h1');

// 3. Set the id of the newHeader to 'victory'
newHeader.id = 'victory';

// 4. Set the text content of newHeader
newHeader.textContent = "Charles Mungai is the champion";

// Append the newHeader to the body
document.body.append(newHeader);

// Additional example for creating and appending a list (optional)
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

document.body.append(ul);
