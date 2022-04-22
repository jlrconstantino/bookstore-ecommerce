// Substitui a chamada do script por um documento HTML de cabeçalho de metadados em tempo de execução
fetch("../elements/head.html")
.then(res => res.text())
.then(text => {

    // Seleciona o script de substituição
    let old_element = document.querySelector("script#head-placer");

    // Cria o novo elemento com base no HTML de metadados
    let new_element = document.createElement("head");
    new_element.innerHTML = text;

    // Substitui no HTML em tempo-real
    old_element.parentNode.replaceChild(new_element, old_element);
})