// ini Javascript

// AutoSlider

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".banner-slide");
  const totalSlides = slides.length;

  function showNextSlide() {
    // Menyembunyikan gambar sebelumnya
    slides[currentIndex].classList.remove("active");

    // Mengubah indeks gambar berikutnya
    currentIndex = (currentIndex + 1) % totalSlides;

    // Menampilkan gambar berikutnya
    slides[currentIndex].classList.add("active");
  }

  // Menampilkan gambar pertama
  slides[currentIndex].classList.add("active");

  // Menjalankan autoslide setiap 3 detik
  setInterval(showNextSlide, 3000);
});

// Section Form

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai input dari form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();

    // Validasi setiap field
    if (!name == "") {
      alert("Name is required!");
      return; // Hentikan proses jika tidak valid
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if (!interest) {
      alert("Please select an interest from the dropdown!");
      return;
    }

// Fungsi untuk validasi email
function validateEmail(email) {
  // Regex untuk memvalidasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
