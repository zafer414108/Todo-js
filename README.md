# Todo-js
HTML Structure:

You have input elements for adding to-do items (todoInput), a button to add tasks (addBtn), and a container for displaying the to-do list (todoList).

# JavaScript Logic:

You've defined an array todos to store your to-do items.

The addBtn has an event listener that triggers when clicked. It checks if the input is empty and displays an alert if so. If not, it creates HTML elements for a new to-do item, assigns them content and event listeners, and appends them to the todos array.

There's a function appendTodos that clears the todoList container and appends each to-do item from the todos array.

The deleteTodo function removes a to-do item from the todos array based on its ID and then calls appendTodos to update the display.

The updateTodo function toggles the "done" class for a to-do item based on its ID.

 # Styling:

You seem to have a CSS class named "done" that you're toggling for completed to-do items.

# Improvement Suggestions:

Consider using const and let consistently for variable declarations.

Instead of using the current timestamp as the ID, you might want to explore other approaches, such as generating unique IDs or using the index in the todos array.

You could enhance the user interface and experience by adding animations or transitions for adding, completing, and deleting to-do items.
# Todo gif
![todo](https://github.com/zafer414108/Todo-js/assets/147662873/697e8ea6-8c73-473c-8adf-34447d080596)
