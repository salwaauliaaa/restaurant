document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category');
    const menuItems = document.querySelectorAll('.menu-item');
  
    // Function to handle category change
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
  
        // Add active class to clicked button
        button.classList.add('active');
  
        // Get the category of the clicked button
        const category = button.getAttribute('data-category');
  
        // Show/Hide menu items based on the selected category
        menuItems.forEach(item => {
          if (item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  