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


// Carrega o conteúdo da página inicial e retorna um elemento para ele
export function load_first_page_content(){

    // Contêiner da página inicial
    let new_element = document.createElement("div");
    new_element.id = "main-container";

    // Adquire o arquivo
    fetch("./elements/first-page.html")
    .then(res => res.text())
    .then(text => {

        // Adição do conteúdo ao contêiner
        new_element.innerHTML = text;
    })

    return new_element;
}