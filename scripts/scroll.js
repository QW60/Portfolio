document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 800) {
        const pages = document.querySelectorAll('.page');
        let currentPage = 0;

        function handleScroll(event) {
            if (currentPage < 2) {
                event.preventDefault();

                if (event.deltaY > 0) {
                    if (currentPage < 2) {
                        currentPage++;
                    }
                } else {
                    if (currentPage > 0) {
                        currentPage--;
                    }
                }
                pages[currentPage].scrollIntoView({ behavior: 'smooth' });
            } else if (currentPage === 2) {
                if (event.deltaY < 0) {
                    event.preventDefault();
                    currentPage--;
                    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        window.addEventListener('wheel', handleScroll, { passive: false });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    currentPage = Array.from(pages).indexOf(targetElement);
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
});