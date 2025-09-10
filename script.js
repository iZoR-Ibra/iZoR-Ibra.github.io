document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); 
    const parent = this.parentElement;
    const imgDiv = parent.querySelector(".project-image");

    document.querySelectorAll(".project-image").forEach(div => {
      if (div !== imgDiv) {
        div.innerHTML = "";
        div.style.display = "none";
      }
    });

    if (imgDiv.innerHTML) {
      imgDiv.innerHTML = "";
      imgDiv.style.display = "none";
    } else {
      const url = this.dataset.url || null;
      const github = this.dataset.github || null;

      let content = `<img src="${this.dataset.img}" alt="Project Preview">`;

      if (url) {
        content += `<br><a href="${url}" target="_blank" class="view-link">View Project</a>`;
      }
      if (github) {
        content += `<br><a href="${github}" target="_blank" class="view-link">View Code</a>`;
      }

      imgDiv.innerHTML = content;
      imgDiv.style.display = "block";
    }
  });
});