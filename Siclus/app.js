document.addEventListener("DOMContentLoaded", function () {
    const videoModal = document.getElementById("videoModal");
    const videoIframe = document.getElementById("videoIframe");
    videoModal.addEventListener("show.bs.modal", function () {
        videoIframe.src = "https://www.youtube.com/embed/gLVDt5637WA?autoplay=1";
    });
    videoModal.addEventListener("hidden.bs.modal", function () {
        videoIframe.src = "";
    });
});

function openModal(imageSrc) {
    event.preventDefault();
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "flex";
  }

  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  