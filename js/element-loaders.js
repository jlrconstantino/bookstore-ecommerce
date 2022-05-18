// Carrega o cabeçalho e retorna um elemento para ele
export function load_header() {

    // Contêiner do header
    let new_element = document.createElement("div");
    new_element.id = "header-container";

    // Adquire o arquivo
    fetch("./elements/header.html")
    .then(res => res.text())
    .then(text => {

        // Adição do cabeçalho ao contêiner
        new_element.innerHTML = text;
    })

    return new_element;
}


// Carrega o rodapé e retorna um elemento para ele
export function load_footer() {

    // Contêiner do footer
    let new_element = document.createElement("div");
    new_element.id = "footer-container";

    // Adquire o arquivo
    fetch("./elements/footer.html")
    .then(res => res.text())
    .then(text => {

        // Adição do rodapé ao contêiner
        new_element.innerHTML = text;
    })

    return new_element;
}


// Carrega o contêiner principal e retorna um elemento para ele
export function load_main_container() {
    let div = document.createElement("div");
    div.id = "main-container";
    return div;
}


