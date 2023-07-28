// Function to show a hidden element
function showElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = 'block';
  }
}

// Function to hide an element
function hideElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = 'none';
  }
}

// Function to toggle visibility of a hidden element
function toggleElementVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
  }
}
