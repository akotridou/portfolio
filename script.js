/*navigation*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });

  });

}

/*scroll animation*/

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.12
  }

);

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);

});

/*see more or hide */
const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenProjects = document.querySelectorAll(".hidden-project");
const projectsSection = document.getElementById("projects");

if (seeMoreBtn) {
  seeMoreBtn.addEventListener("click", () => {
    const isExpanded = seeMoreBtn.classList.toggle("expanded");

    hiddenProjects.forEach(project => {
      if (isExpanded) {
        project.classList.add("show");
        observer.observe(project);
      } else {
        project.classList.remove("show");
        project.classList.remove("visible");
      }
    });

    if (isExpanded) {
      seeMoreBtn.textContent = "Hide ↑";
    } else {
      seeMoreBtn.textContent = "See More ↓";
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}