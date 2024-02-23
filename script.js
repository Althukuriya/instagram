document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  var sidebar = document.getElementById('sidebar');
  var isSidebarOn = false;
  var content = document.querySelector('.content');

  function isYouTubeOrInstagramReels() {
    var currentUrl = window.location.href;
    return (currentUrl.includes('youtube.com') || currentUrl.includes('instagram.com')) && currentUrl.includes('/reels/');
  }

  function toggleSidebar(show) {
    if (show) {
      sidebar.classList.add('active');
      toggleButton.textContent = 'Turn Off';
      isSidebarOn = true;
    } else {
      sidebar.classList.remove('active');
      toggleButton.textContent = 'Turn On';
      isSidebarOn = false;
    }
  }

  toggleButton.addEventListener('click', function() {
    if (isSidebarOn) {
      toggleSidebar(false);
      localStorage.setItem('sidebarPreference', 'off');
    } else {
      toggleSidebar(true);
      localStorage.setItem('sidebarPreference', 'on');
    }
  });

  // Check if sidebar should be initially on based on user preference and if they are on YouTube or Instagram reels
  var sidebarPreference = localStorage.getItem('sidebarPreference');
  if (sidebarPreference === 'on' && isYouTubeOrInstagramReels()) {
    toggleSidebar(true);
  }
});
