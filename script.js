
const listItems = ['HTML and Semantics', 'Starting with CSS', 'Working Template', 'Project Using HTML & CSS', 'Advance Javascript'];


const button = document.querySelector('button');


const list = document.querySelector('ul');

let counter = 0;

button.addEventListener('click', () => {
 

  if (listItems.length > counter) {
   
    const li = document.createElement('li');
  
    li.textContent = listItems[counter];
  
    list.appendChild(li);
    counter++;
  } else {
    alert('All items have been added!');
  }
});