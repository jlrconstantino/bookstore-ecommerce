// Substitui a chamada do script por um documento HTML de mostrador de livro
fetch("../elements/book-displayer.html")
.then(res => res.text())
.then(text => {

    // Seleciona o script de substituição
    let old_element = document.querySelector("script#book-displayer-placer");

    // Cria o novo elemento com base no HTML do mostrador
    let new_element = document.createElement("div");
    new_element.setAttribute("class", "book-displayer-container");
    new_element.innerHTML = text;

    // Substitui no HTML em tempo-real
    old_element.parentNode.replaceChild(new_element, old_element);
})