document.addEventListener('DOMContentLoaded', () => {
    const skipBtn = document.getElementById('skip-crawl-btn');
    const overlay = document.getElementById('starwars-crawl-overlay');
    const crawlContent = document.getElementById('crawl-content');

    const skipCrawl = () => {
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                /* Optionally reset animation if needed or just remove from DOM */
            }, 1500); // Wait for transition out
        }
    };

    if (skipBtn) {
        skipBtn.addEventListener('click', skipCrawl);
    }

    if (crawlContent) {
        crawlContent.addEventListener('animationend', () => {
            skipCrawl();
        });
    }
});
