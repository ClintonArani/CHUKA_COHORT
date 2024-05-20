# Update Button Functionality

## When the form is submitted, it checks if userIndex has a value:
## If it doesn't, a new user is added.
## If it does, the existing user at that index is updated.
## The displayUsers function creates a row for each user with "Delete" and "Update" buttons.
## When the "Update" button is clicked, it populates the form fields with the user's current information, sets the userIndex hidden input, and changes the submit button text to "Update Account".
## When the form is submitted after clicking "Update", the changes are saved to local storage, and the table is updated accordingly.