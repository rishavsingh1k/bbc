/* ==========================
   DARK MODE
========================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });

}

/* ==========================
   READING PROGRESS BAR
========================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    const progressBar =
        document.getElementById("progress-bar");

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});

/* ==========================
   BACK TO TOP BUTTON
========================== */

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    backToTop.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================
   SEARCH FUNCTIONALITY
========================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const searchText =
            searchInput.value.toLowerCase();

        const articles =
            document.querySelectorAll(".article-card");

        articles.forEach(article => {

            const title =
                article.querySelector("h3")
                ?.textContent
                .toLowerCase();

            if (!title) return;

            if (title.includes(searchText)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }

        });

    });

}

/* ==========================
   SCROLL ANIMATION
========================== */

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

document
.querySelectorAll(
    ".empty-state, .about-content"
)
.forEach(el => {
    observer.observe(el);
});

/* ==========================
   PARALLAX HERO
========================== */

const hero =
    document.querySelector(".hero");

if (hero) {

    window.addEventListener("scroll", () => {

        const offset =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            offset * 0.5 + "px";

    });

}

/* ==========================
   SMOOTH NAVIGATION
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* ==========================
   HEADER EFFECT
========================== */

const header =
    document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.backdropFilter =
                "blur(25px)";

            header.style.background =
                "rgba(255,255,255,0.15)";

        } else {

            header.style.background =
                "rgba(255,255,255,0.05)";

        }

    });

}

/* ==========================
   PAGE LOAD ANIMATION
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ==========================
   AUTO YEAR FOOTER
========================== */

const footerYear =
    document.querySelector(".footer-bottom");

if (footerYear) {

    const year =
        new Date().getFullYear();

    footerYear.innerHTML =
        `© ${year} KricK.thoughts. All Rights Reserved.`;

}