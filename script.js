// Initialize the list items array
const listItems = ['HTML and Semantics', 'Starting with CSS', 'Working Template', 'Project Using HTML & CSS', 'Advance Javascript'];

// Get the button element
const button = document.querySelector('button');

// Get the ul element where we will add the list items
const list = document.querySelector('ul');

// Initialize a counter variable to keep track of the next item to add
let counter = 0;

// Add an event listener to the button
button.addEventListener('click', () => {
  // Check if there are any items left in the list
  if (counter < listItems.length) {
    // Create a new list item element
    const li = document.createElement('li');
    // Set the text of the new list item to the next item in the listItems array
    li.textContent = listItems[counter];
    // Add the new list item to the ul element
    list.appendChild(li);
    // Increment the counter
    counter++;
  } else {
    // Display a message indicating that all items have been added
    alert('All items have been added!');
  }
});