let currentIndex = 0;
        const images = document.getElementById('bannerImages');
        const totalImages = images.children.length;

        function showImage(index) {
            const width = window.innerWidth; // Full screen width
            images.style.transform = `translateX(-${index * width}px)`;
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }

        // Auto-scroll every 5 seconds
        setInterval(nextImage, 5000);

        // Adjust on window resize
        window.addEventListener('resize', () => showImage(currentIndex));

        let currentNewsIndex = 0;
        const newsCarousel = document.getElementById('newsCarousel');
        const totalNews = newsCarousel.children.length;

        function showNews(index) {
            newsCarousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextNews() {
            currentNewsIndex = (currentNewsIndex + 1) % totalNews;
            showNews(currentNewsIndex);
        }

        function prevNews() {
            currentNewsIndex = (currentNewsIndex - 1 + totalNews) % totalNews;
            showNews(currentNewsIndex);
        }
