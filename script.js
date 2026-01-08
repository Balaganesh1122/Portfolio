// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-up, .fade-in")
  .forEach(el => observer.observe(el));

// Modal
function openModal(title, desc, link) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalLink").href = link;
  document.getElementById("projectModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.firstElementChild.classList.toggle("fa-sun");
  toggle.firstElementChild.classList.toggle("fa-moon");
});
