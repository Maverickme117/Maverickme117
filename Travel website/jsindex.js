
        // JavaScript code
                            window.onload = function() {
            // Get the navbar elements
            const navItems = document.querySelectorAll('.nav-item');

                            // Add click event listeners to the navbar items
                            navItems.forEach(function(item) {
                                item.addEventListener('click', function () {
                                    // Remove the 'active' class from all navbar items
                                    navItems.forEach(function (item) {
                                        item.classList.remove('active');
                                    });

                                    // Add the 'active' class to the clicked navbar item
                                    this.classList.add('active');
                                });
            });

                            // Get the "Explore Places" button
                            const exploreBtn = document.querySelector('.btn-primary');

                            // Add click event listener to the button
                            exploreBtn.addEventListener('click', function() {
                // Smooth scroll to the "Explore Places" section
                const exploreSection = document.getElementById('explore-places');
                            exploreSection.scrollIntoView({behavior: 'smooth' });
            });
        }
// Get the form element
const queryForm = document.querySelector('.query-form');

// Add an event listener for form submission
queryForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Do something with the form data (e.g., send it to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    queryForm.reset();
});