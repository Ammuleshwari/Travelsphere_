function showContinent(continentId) {
    // Get all continent sections and hide them
    const continents = document.querySelectorAll('.continent');
    continents.forEach(continent => {
      continent.classList.remove('active');
    });
  
    // Show the selected continent
    const selectedContinent = document.getElementById(continentId);
    selectedContinent.classList.add('active');
  }
  
  // Display the first continent by default
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('latin-america').classList.add('active');
  });
  