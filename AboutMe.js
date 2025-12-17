document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that point to an ID on the same page
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    // Loop through each link
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent the default jump action
            e.preventDefault();

            // Get the target element's ID from the href attribute (e.g., #section1)
            const targetId = this.getAttribute('href');
            
            // Get the actual DOM element
            const targetElement = document.querySelector(targetId);

            // Check if the target element exists
            if (targetElement) {
                // Use the scrollIntoView method with the 'smooth' option
                // This is a robust, cross-browser alternative to the CSS property.
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});