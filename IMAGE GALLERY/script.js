const panels = document.querySelectorAll('.panel');
const carouselTrack = document.getElementById('carouselTrack');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const indicator = document.getElementById('indicator');
let currentExpandedPanel = null;

// Click handler to expand panel
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Pause carousel
    carouselTrack.classList.add('paused');
    indicator.classList.remove('playing');
    indicator.textContent = '⏸ Paused';

    // Show expanded view
    panel.classList.add('active');
    overlay.classList.add('active');
    closeBtn.classList.add('show');
    currentExpandedPanel = panel;
  });
});

// Close button handler
closeBtn.addEventListener('click', closePanelExpansion);
overlay.addEventListener('click', closePanelExpansion);

// Close panel expansion
function closePanelExpansion() {
  if (currentExpandedPanel) {
    currentExpandedPanel.classList.remove('active');
  }
  overlay.classList.remove('active');
  closeBtn.classList.remove('show');
  carouselTrack.classList.remove('paused');
  //indicator.classList.add('playing');
  //indicator.textContent = 'Auto Playing';
}

// Escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && currentExpandedPanel) {
    closePanelExpansion();
  }
});

// Pause on hover
/*document.querySelector('.container').addEventListener('mouseenter', () => {
  if (!currentExpandedPanel) {
    carouselTrack.classList.add('paused');
    indicator.classList.remove('playing');
    indicator.textContent = '⏸ Paused';
  }
});*/

// Resume on leave
/*document.querySelector('.container').addEventListener('mouseleave', () => {
  if (!currentExpandedPanel) {
    carouselTrack.classList.remove('paused');
    indicator.classList.add('playing');
    indicator.textContent = 'Auto Playing';
  }
});*/