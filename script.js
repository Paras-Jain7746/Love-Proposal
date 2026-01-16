function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page' + pageNumber).classList.add('active');
}

function moveNoButton() {
    const btn = document.getElementById('no-btn-final');
    btn.classList.add('move');
}

// Add event listeners for the no button in page4
document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn-final');
    if (noBtn) {
        // Prevent clicking
        noBtn.addEventListener('click', function(event) {
            event.preventDefault();
        });

        // Move on hover
        noBtn.addEventListener('mouseenter', function() {
            const maxX = window.innerWidth - noBtn.offsetWidth;
            const maxY = window.innerHeight - noBtn.offsetHeight;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
        });
    }
});
