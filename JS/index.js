document.addEventListener("DOMContentLoaded", function () {
  var yellowButton = document.getElementById("yellow-button");
  var pinkButton = document.getElementById("pink-button");
  var blueButton = document.getElementById("blue-button");
  var umbrellaImage = document.getElementById("umbrella-image");
  var logoFile = document.getElementById("logo-file");
  var uploadFile = null;

  blueButton.addEventListener("click", function () {
    umbrellaImage.src = "images/Blue-umbrella.png";
  });

  pinkButton.addEventListener("click", function () {
    umbrellaImage.src = "images/Pink-umbrella.png";
  });

  yellowButton.addEventListener("click", function () {
    umbrellaImage.src = "images/Yellow-umbrella.png";
  });

  logoFile.addEventListener("change", (e) => {
    uploadFile = e.target.files && e.target.files[0];
    const maxFileSize = 5 * 1024 * 1024;
    if (uploadFile.size > maxFileSize) {
      window.alert("File size should not be greater than 5 MB");
    }
  });
  
  document
    .getElementById("logo-file")
    .addEventListener("change", function (event) {
      const umbrellaImage = document.getElementById("umbrella-image");
      umbrellaImage.style.display = "none";
      const logoImage = document.getElementById("umbrella-logo");
      logoImage.style.display = "none";
      setTimeout(() => {
        var uploadedImage = document.getElementById("umbrella-logo");
        uploadedImage.src = URL.createObjectURL(event.target.files[0]);
        uploadedImage.style.opacity = "1";
        umbrellaImage.style.display = "block";
        logoImage.style.display = "block";
      }, 1000);
      const loadingImage = document.getElementById("loading-image");
      loadingImage.style.display = "block";
      setTimeout(() => {
        loadingImage.style.display = "none";
      }, 15);
    });
});
