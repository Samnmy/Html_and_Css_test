// Function to show the clicked image in fullscreen
function openFullscreen(src) {
  document.getElementById("fullscreen-img").src = src;
  document.getElementById("fullscreen").style.display = "flex";
}

// Function to close the fullscreen image viewer
function closeFullscreen() {
  document.getElementById("fullscreen").style.display = "none";
}

// Scroll reveal
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      el.classList.add("active");
    }
  }
});
