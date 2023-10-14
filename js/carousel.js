"use strict";
$(document).ready(function() {
    const carouselContainers = document.querySelectorAll(".carousel-container");

    function setCarouselHeight() {
        carouselContainers.forEach(function(container) {
            let maxHeight = 0;
            const items = container.querySelectorAll(".carousel-content li");
            items.forEach(function(item) {
                const height = $(item).children().height();
                maxHeight = height > maxHeight ? height : maxHeight;
            });
            container.querySelector(".carousel-content").style.height = maxHeight + "px";
        });
    }

    setCarouselHeight();
    window.addEventListener("resize", setCarouselHeight);

    carouselContainers.forEach(function(container) {
        (function(container) {
            // Resto del código del carrusel...
        })(container);
    });
});
