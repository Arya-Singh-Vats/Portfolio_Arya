// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");

        // Ignore if it's just "#"
        if (targetId === "#") return;

        e.preventDefault();

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
