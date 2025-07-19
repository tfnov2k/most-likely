const images = [
            'image1.png',
            'image2.png',
            'image3.png',
            'image4.png',
            'image5.png'
        ];

        let currentIndex = 0;
        const carouselImage = document.getElementById('carouselImage');
        const imageCounter = document.getElementById('imageCounter');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function updateCarousel() {
            carouselImage.src = images[currentIndex];
            imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }

        // Handle image load errors by showing placeholder
        carouselImage.onerror = function() {
            this.style.display = 'none';
            if (!document.querySelector('.placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'placeholder';
                placeholder.textContent = `Image not found: ${images[currentIndex]}`;
                this.parentNode.insertBefore(placeholder, this);
            }
        };

        carouselImage.onload = function() {
            const placeholder = document.querySelector('.placeholder');
            if (placeholder) {
                placeholder.remove();
            }
            this.style.display = 'block';
        };

        nextBtn.addEventListener('click', showNext);
        prevBtn.addEventListener('click', showPrev);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        });

        // Initialize
        updateCarousel();