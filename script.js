// Toggled Sidebar Mobile
function toggleSidebar() {
  document.querySelector('.hamburger-icon').classList.toggle('toggled');
  document.querySelector('.header-main-nav').classList.toggle('active');

  if (document.querySelector('.header-main-nav').classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

// Manage Quantity
document.addEventListener("DOMContentLoaded", function () {
  const qtyElement = document.querySelector(".qty");

  document.querySelector(".decrement-qty").addEventListener("click", function () {
    let value = parseInt(qtyElement.textContent);
    if (value > 1) qtyElement.textContent = value - 1;
  });

  document.querySelector(".increment-qty").addEventListener("click", function () {
    let value = parseInt(qtyElement.textContent);
    qtyElement.textContent = value + 1;
  });
});

// Preloader, Fetch and Carousel images
window.addEventListener("load", function () {
  fetch("https://mocki.io/v1/93501399-a682-4ae6-a6af-04aed17c9942")
    .then((response) => response.json())
    .then((imageUrls) => {
      const mainSliderWrapper = document.querySelector(".main-slider .swiper-wrapper");
      const thumbnailSliderWrapper = document.querySelector(".thumbnail-slider .swiper-wrapper");

      imageUrls.forEach((imgUrl) => {
        const mainSlide = document.createElement("div");
        mainSlide.classList.add("swiper-slide");
        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        imgElement.alt = "Product Image";
        mainSlide.appendChild(imgElement);
        mainSliderWrapper.appendChild(mainSlide);

        const thumbSlide = document.createElement("div");
        thumbSlide.classList.add("swiper-slide");
        const thumbImg = document.createElement("img");
        thumbImg.src = imgUrl;
        thumbImg.alt = "Thumbnail Image";
        thumbImg.style.width = "100px";
        thumbSlide.appendChild(thumbImg);
        thumbnailSliderWrapper.appendChild(thumbSlide);
      });

      const thumbnailSlider = new Swiper(".thumbnail-slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      const mainSlider = new Swiper(".main-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumbnailSlider,
        },
      });

      document.querySelector(".loader").classList.add("hide");
      document.body.classList.add("animate-scale-down");
    })
    .catch((error) => {
      console.error("Error fetching image URLs:", error);
      document.querySelector(".loader").classList.add("hide");
      document.body.classList.add("animate-scale-down");
    });
});