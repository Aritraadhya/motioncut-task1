// Function to toggle completion of tasks
function toggleCompletion(listItem) {
     // Toggle between 'completed' and 'not-completed' classes
     listItem.classList.toggle('completed');
     listItem.classList.toggle('not-completed');
     
     // Change the icon from circle to checkmark
     const icon = listItem.querySelector('.icon');
     if (listItem.classList.contains('completed')) {
       icon.textContent = '✅'; // Checkmark icon for completed tasks
     } else {
       icon.textContent = '⚪'; // Circle icon for not completed tasks
     }
   }
   