document.getElementById('lang-toggle').addEventListener('click', function() {
    const isVietnamese = this.textContent === 'Switch to English';
    this.textContent = isVietnamese ? 'Switch to Vietnamese' : 'Switch to English';

    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = isVietnamese ? element.getAttribute('data-en') : element.getAttribute('data-vi');
    });
});
