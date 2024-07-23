document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        document.querySelector('.nav-bar').style.opacity = '1';
    }, 1000);
});

function navigateTo(page) {
    window.location.href = page;
}
