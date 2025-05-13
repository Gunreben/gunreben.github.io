/**
 * Smooth scroll functionality for navigation links
 */
document.addEventListener('DOMContentLoaded', () => {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  // Add click event listeners to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor click behavior
      e.preventDefault();
      
      // Get the target element
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Handle initial page load with hash in URL
  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      // Small delay to ensure proper scrolling after page load
      setTimeout(() => {
        initialTarget.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }
}); 