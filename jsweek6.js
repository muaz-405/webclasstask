// Define actions to be performed when the window loads
window.onload = function() {
    // Functionality for "To Do" button
    var btnAdd = document.getElementById('btnAdd');
    btnAdd.onclick = function() {
        console.log('Anonymous Function');
    }

    // Function to handle click on the "btnbing" button
    function handlebing() {
        console.log('Handle First');
    }

    // Function to handle click on the "btnbing" button asynchronously
    function handlebind() {
        console.log('Asynchronous function');
        var btnbing = document.getElementById('btnbing');
        btnbing.onclick = handlebing;
    }

    // Functionality for "Add Fruits" button
    var btnFruit = document.getElementById('fruit');
    btnFruit.onclick = addtodo;

    // Function to add a new todo item
    function addtodo() {
        var myinput = document.getElementById('myinput').value;
        var todos = document.getElementById('dos');
        var newli = document.createElement("li");
        newli.textContent = myinput;
        // Add delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            todos.removeChild(newli);
        };
        newli.appendChild(deleteBtn);
        todos.appendChild(newli);
    }

    // Call handlebind to set up the event handling for "btnbing" button
    handlebind();

    // Apply delete functionality to existing items
    var existingDeleteBtns = document.querySelectorAll('.deleteBtn');
    existingDeleteBtns.forEach(function(btn) {
        btn.onclick = function() {
            var listItem = this.parentNode;
            var ul = listItem.parentNode;
            ul.removeChild(listItem);
        };
    });
};
