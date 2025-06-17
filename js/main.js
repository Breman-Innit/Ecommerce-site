
// Show popup after 2 seconds
setTimeout(openPopup, 2000);

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function visitStore() {
    window.location.href = "shop.html"; 
}

window.addEventListener('mouseout', (e) => {
    if (e.clientY < 0) {
        openPopup();
    }
});



  function showMenu() {
    document.getElementById("navLinks").classList.add("active");
  }

  function hideMenu() {
    document.getElementById("navLinks").classList.remove("active");
  }

  function searchSite() {
    const query = document.getElementById("main-search").value.trim();
    if (query) {
      alert("Search triggered for: " + query);
    }
  }

  
  // Get current count or start at 0
  let count = localStorage.getItem('visitCount') || 0;
  
  // Increment count
  count++;
  
  // Update display and storage
  document.getElementById('counter').textContent = count;
  localStorage.setItem('visitCount', count);

// Only run popup code if we're on the homepage
if (window.location.pathname === '/' || 
  window.location.pathname === '/index.html') {
  
  // Your existing popup code here
  setTimeout(openPopup, 3000);
  
  function openPopup() {
      document.getElementById("popup").style.display = "flex";
  }
  
}