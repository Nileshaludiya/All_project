document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        showSection(sectionId);
    });
});

function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}
