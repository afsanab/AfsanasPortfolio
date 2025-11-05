document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Modal for Organizations ---------- */
    document.querySelectorAll(".organization-card").forEach((org) => {
        org.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            document.getElementById("orgModalTitle").innerText = title;
            document.getElementById("orgModalDesc").innerText = description;
            document.getElementById("orgModal").style.display = "block";
            document.getElementById("orgModal").setAttribute("aria-hidden", "false");
        });
    });

    document.querySelector(".modal .close").addEventListener("click", () => {
        document.getElementById("orgModal").style.display = "none";
        document.getElementById("orgModal").setAttribute("aria-hidden", "true");
    });

    window.addEventListener("click", (event) => {
        const modal = document.getElementById("orgModal");
        if (event.target === modal) {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const modal = document.getElementById("orgModal");
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });

    /* ---------- Smooth Scroll for Nav ---------- */
    document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const el = document.getElementById(targetId);
            if (!el) return;
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    /* ---------- Active Section Highlight ---------- */
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(document.querySelectorAll("nav a"));
    const linkById = Object.fromEntries(
        navLinks.map((a) => [a.getAttribute("href").replace("#", ""), a])
    );

    const onScroll = () => {
        const y = window.scrollY + 120; // account for sticky nav
        let current = sections[0]?.id;
        for (const sec of sections) {
            if (y >= sec.offsetTop) current = sec.id;
        }
        navLinks.forEach((a) => a.classList.remove("active"));
        if (linkById[current]) linkById[current].classList.add("active");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);

    /* ---------- Role Rotator in Hero ---------- */
    const roles = ["Software Engineer", "Data Analyst"];
    let r = 0;
    setInterval(() => {
        const el = document.getElementById("roleRotator");
        if (!el) return;
        r = (r + 1) % roles.length;
        el.style.opacity = 0;
        setTimeout(() => {
            el.textContent = roles[r];
            el.style.opacity = 1;
        }, 180);
    }, 2200);

    /* ---------- Project Filtering ---------- */
    const chips = document.querySelectorAll(".chip");
    const cards = document.querySelectorAll(".project-card");

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            chips.forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
            const tech = chip.dataset.tech;
            cards.forEach((card) => {
                const tags = (card.dataset.tech || "").toLowerCase();
                card.style.display = tech === "all" || tags.includes(tech) ? "" : "none";
            });
        });
    });

    /* ---------- Reveal on Scroll ---------- */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    /* ---------- Dark Mode Toggle (floating) ---------- */
    const saved = localStorage.getItem("theme");
    if (saved === "light") document.body.classList.add("light");

    function toggleTheme() {
        document.body.classList.toggle("light");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("light") ? "light" : "dark"
        );
    }

    const themeBtn = document.createElement("button");
    themeBtn.setAttribute("aria-label", "Toggle theme");
    Object.assign(themeBtn.style, {
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: "60",
        padding: "14px 18px",   // bigger padding
        fontSize: "1.25rem",    // larger icon/text
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,.25)",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    });

    themeBtn.innerText = "☾";
    themeBtn.onclick = toggleTheme;
    document.body.appendChild(themeBtn);

    /* ---------- Subtle project hover (already in CSS, add lazy) ---------- */
    document.querySelectorAll("img").forEach((img) => (img.loading = "lazy"));
});
// ---------- Resume View Button ----------
const resumeBtn = document.getElementById("viewResumeBtn");
if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
        window.open("AfsanaBhuiyan_Resume.pdf", "_blank", "noopener");
    });
}
