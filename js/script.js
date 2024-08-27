//  Here We are fetching data first & we are fetching the addToDo item that is our id of our add button 
let add = document.getElementById("addToDo");
let input = document.getElementById("inputField");
// Here we are creating a container that's going to have a list of our items
let toDoContainer = document.getElementById("toDoContainer");

// here we are adding the event listener to our button so that it can work when the user clicks on it
add.addEventListener('click', addItem);
// To store my data in the input field i have to also add an event listener, where by if i type any text in the input field & press enter key on my keyboard, works. So thats why am using key press.
input.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        addItem();
    }
})
    // Here I am defining the function called "addItem"
function addItem(e){
    // Here we are taking the value of the input field and store it in a variable named "item_value" so that we can easily fetch it using the input variable we called in line two(2) if you recall. we are doing this because it contains our "document.getElementById("inputField");" as it's the one that fetches the text or data entered.
    const item_value = input.value;
    // Here I will run console.log() to check if it works properly
    console.log(item_value)
    // We are going to manipulate our DOM structure cause we we want to show/display where our entered data is right now after pressing enter or clicking using a mouse
    
    const item = document.createElement('div');
    // we to add also a class item
    item.classList.add('item');

    const item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    const input_item = document.createElement('input');
    input_item.classList.add('text');
    input_item.type = 'text';
    input_item.value = item_value; 
    input_item.setAttribute('readonly', 'readonly');
    item_content.appendChild(input_item);

    toDoContainer.appendChild(item);

    // Now If am done typing my text in the input field, i want to cut it
    // So we are going to add a CSS Line using Javascript
    input_item.addEventListener('dblclick', function(){
        input_item.style.textDecoration = "line-through";
    })
    // After this i have to add the edit and delete button
    const item_action = document.createElement('div');
    item_action.classList.add('actions');

    const edit_item = document.createElement('button');
    edit_item.classList.add('edit', 'btn', 'btn-success');

    edit_item.type = "button";
    // to edit our text we will use 
    edit_item.innerText = 'Edit'
    // after creating the edit button you have to appendchild
    item_action.appendChild(edit_item);

    // We have to create a delete button below
    const delete_item = document.createElement('button');
    delete_item.classList.add('delete', 'btn', 'btn-danger', 'fa-solid', 'fa-trash');
    // <i class="fa-solid fa-trash-can"></i>
    delete_item.innerText = 'Delete'

    

    // after creating the delete button you have to appendchild
    item_action.appendChild(delete_item);
    item.appendChild(item_action);

    // Now we are going to print the functions Delete & Edit Button
    edit_item.addEventListener('click', (e) => {
        if(edit_item.innerText.toLowerCase() == "edit") {
            edit_item.innerText = "Save";
            input_item.removeAttribute("readonly");
            input_item.focus();
        } else {
            edit_item.innerText = "Edit";
            input_item.setAttribute("readonly", "readonly")
        }
    });

    delete_item.addEventListener('click', (e) => {
        toDoContainer.removeChild(item);
    });

    // now i want when i type my text & when it has been saved in the list, i want my input-field to be empty
    input.value = "";
}