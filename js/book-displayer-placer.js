// Substitui a chamada do script por um documento HTML de mostrador de livro
fetch("../elements/book-displayer.html")
.then(res => res.text())
.then(text => {

    // Seleciona os scripts de substituição
    let old_elements = document.querySelectorAll("script#book-displayer-placer");

    // Cria o novo elemento com base no HTML do mostrador para cada script
    old_elements.forEach(old_element => {
        let new_element = document.createElement("div");
        new_element.setAttribute("class", "book-displayer-container");
        new_element.innerHTML = text;

        // Atribui as variáveis
        new_element.getElementsByClassName("book-displayer-img")[0].setAttribute("src", old_element.getAttribute("img-src"));
        new_element.getElementsByClassName("book-displayer-title")[0].innerHTML = old_element.getAttribute("title");
        new_element.getElementsByClassName("book-displayer-price")[0].innerHTML = old_element.getAttribute("price");
        new_element.getElementsByClassName("book-displayer-button")[0].onclick = function(){location.replace(old_element.getAttribute("target"))};

        // Substitui no HTML em tempo-real
        old_element.parentNode.replaceChild(new_element, old_element);
    })
})