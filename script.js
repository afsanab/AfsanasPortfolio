document.addEventListener("DOMContentLoaded", function () {
    // Organization Modal Functionality
    document.querySelectorAll('.organization-card').forEach(org => {
        org.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');

            document.getElementById('orgModalTitle').innerText = title;
            document.getElementById('orgModalDesc').innerText = description;
            document.getElementById('orgModal').style.display = 'block';
        });
    });

    document.querySelector('.modal .close').addEventListener('click', function () {
        document.getElementById('orgModal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('orgModal')) {
            document.getElementById('orgModal').style.display = 'none';
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Project Hover Effects
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
