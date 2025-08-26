document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); 
    const parent = this.parentElement;
    const imgDiv = parent.querySelector(".project-image");

    if (imgDiv.innerHTML) {
      imgDiv.innerHTML = "";
      imgDiv.style.display = "none";
    } else {
      imgDiv.innerHTML = `<img src="${this.dataset.img}" alt="Project Preview">`;
      imgDiv.style.display = "block";
    }
  });
});