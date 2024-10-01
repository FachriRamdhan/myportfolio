// Dark mode toggle
const toggleButton = document.getElementById("toggle");
const body = document.getElementById("body");
const toggleIcon = document.getElementById("toggle-icon");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleIcon.classList.toggle("fa-sun");
  toggleIcon.classList.toggle("fa-moon");
});

// Button functionality
const buttons = document.querySelectorAll(".button");
const contentSections = document.querySelectorAll(".content-section");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.id.replace("-btn", "-content");
    const targetContent = document.getElementById(targetId);

    // Hide all other sections
    contentSections.forEach((section) => {
      section.style.display = "none";
    });

    // Show the clicked section
    targetContent.style.display = "block";
  });
});
