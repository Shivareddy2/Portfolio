// Typed.js effect
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Java Developer", "Web Developer", "Python Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Animate skill bars on scroll
function animateSkills() {
    const skills = document.querySelectorAll(".skill-bar");
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            const span = skill.querySelector("span");
            span.style.width = skill.getAttribute("data-percent") + "%";
        }
    });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
