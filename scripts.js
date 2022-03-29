function fillSign(field) {
  const fieldType = document.querySelector("#"+field.id).type;
  const fieldValue = document.querySelector("#"+field.id).value;
  const fieldToFill = document.querySelector('#fill-'+field.id);
  const defaultImg = 'https://via.placeholder.com/120x120/f47921/FFF?text=SUA+FOTO';

  if (fieldValue != "") {
    if (fieldType == "url") {
      fieldToFill.src = fieldValue;
    } else {
      fieldToFill.innerHTML = fieldValue;
    }
  } else {
    if (fieldType == "url") {
      fieldToFill.src = defaultImg;
    } else {
      fieldToFill.innerHTML = "Preencha o campo "+field.id;
    }
  }
}

function copy() {
  const content = document.querySelector("#copyContent").innerHTML;
  navigator.clipboard.writeText(content)
  .then(() => {
    document.querySelector('.copyButton').innerHTML = "Copiado ✔";
  })
  .catch(err => {
    console.log(err, 'Algo deu Errado');
  })
}