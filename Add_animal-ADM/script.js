var inputs = $('[type="checkbox"]'); // colocar os inputs em cache
inputs.on('click', function() { // juntar auscultador de evento
    inputs.get().forEach(function(el) { // iterar com a array nativa
        el.checked = el == this && this.checked; // marcar ou desmarcar o elemento iterado
    }, this);
});

const inputFile = document.querySelector("#img__input");
const imgImage = document.querySelector(".img__image");
const imgImageTxt = "Adicione uma imagem";
imgImage.innerHTML = imgImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("img__img");

      imgImage.innerHTML = "";
      imgImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    imgImage.innerHTML = imgImageTxt;
  }
});
