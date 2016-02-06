// *click
// - listen for the click of the button
// - (button.addEventListener("click", add stuff to the list))

//
// *append it the parent (adding stuff to the list)
// identify the parent (ul)
// attach child (li)
// create more children (li)
// we place input.value inside newly created child element
// now, we append this new child+input.value  onto parent element
//


// grabbing things...
// ========
// grab the form element === >
// grab the input element ==== >
// grab the ul element === >

var form = document.querySelector("#new-todo-list-form");
var input = document.querySelector("#new-todo-item-input");
var parent = document.querySelector("#todo-list")

function addListItem(todo) {
  var listItem = document.createElement("li");
  li.textContent = todo;

  parent.appendChild("listItem");
}

function formSubmitted(buttonClicked){
  buttonClicked.preventDefault();
  addListItem(input.value);
  form.reset();
}

// formsubitted is a "call back function" which does not require a double paranthesis
// it does not run immediately.
form.addEventListener("submit",formSubmitted);
