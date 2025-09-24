// Script to handle active state for sidebar links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
