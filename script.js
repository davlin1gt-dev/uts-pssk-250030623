document.getElementById("form-tenant").addEventListener("submit", function (e) {
  e.preventDefault();
  var nama = document.getElementById("usaha").value;
  document.getElementById("pesan").textContent =
    "Pendaftaran " + nama + " terkirim. Panitia akan menghubungi lewat email.";
  this.reset();
});
