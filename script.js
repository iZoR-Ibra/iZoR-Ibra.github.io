document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); 
    const parent = this.parentElement;
    const imgDiv = parent.querySelector(".project-image");

    if (imgDiv.innerHTML) {
      imgDiv.innerHTML = "";
      imgDiv.style.display = "none";
    } else {
      const url = this.dataset.url || null;
      let content = `<img src="${this.dataset.img}" alt="Project Preview">`;

      if (url) {
        content += `<br><a href="${url}" target="_blank" class="view-link">View Project</a>`;
      }

      imgDiv.innerHTML = content;
      imgDiv.style.display = "block";
    }
  });
});