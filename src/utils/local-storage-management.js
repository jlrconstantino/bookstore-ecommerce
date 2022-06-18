// Funções assíncronas para manipulação de armazenamento local
function later() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}
export async function getItem(key) {
    later(); 
    return JSON.parse(localStorage.getItem(key));
}
export async function setItem(key, value) {
    later(); 
    localStorage.setItem(key, JSON.stringify(value));
}

/*
export function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}
export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
*/


// Inicialização do armazenamento local
export async function startLocalStorage() {

    // Livros
    let books = [
        {
            id: 1, 
            title: "Getting an Arduino LED to Blink", 
            price: 49.90, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Cartonado", 
            year: 2017, 
            language: "Portugol", 
            pages: 128, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/arduino_led.jpg"),
        },
        {
            id: 2, 
            title: "Useless GIT Commit Messages", 
            price: 88.49, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Mecânico", 
            year: 2021, 
            language: "Português", 
            pages: 242, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/commit_messages.jpeg"),
        },
        {
            id: 3, 
            title: "Using Convoluted Coding Practices to Piece Together a Somehow Functional Product", 
            price: 240.29, 
            author: "Unknown",
            publisher: "O'REILLY",
            finishing: "Cartunado", 
            year: 2015, 
            language: "Inglês", 
            pages: 199, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/convoluted_coding.jpg"),
        },
        {
            id: 4, 
            title: "Hoping This Works", 
            price: 9.90, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Agrafado", 
            year: 1999, 
            language: "Alemão", 
            pages: 58, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/hoping_this_works.jpg"),
        },
        {
            id: 5, 
            title: "Ignoring Deprecation Warnings", 
            price: 32.89, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Brochado", 
            year: 2020, 
            language: "Latim", 
            pages: 120, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/ignoring_deprecation.jpg"),
        },
        {
            id: 6, 
            title: "Resolving Broken Dependencies", 
            price: 419.90, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Brochado", 
            year: 2012, 
            language: "Português", 
            pages: 310, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/resolving_dependencies.webp"),
        },
        {
            id: 7, 
            title: "Title Goes Here", 
            price: 14.90, 
            author: "Kanye West",
            publisher: "O RLY?",
            finishing: "Mecânico", 
            year: 2004, 
            language: "Inglês", 
            pages: 107, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/title_goes_here.webp"),
        },
        {
            id: 8, 
            title: "Trying Stuff Until it Works", 
            price: 16.90, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Brochado", 
            year: 2009, 
            language: "Latim", 
            pages: 420, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/trying_stuff.jpg"), 
        }, 
        {
            id: 9, 
            title: "What is LIGMA", 
            price: 22.70, 
            author: "B. J. Gay",
            publisher: "O RLY?",
            finishing: "Agrafado", 
            year: 1919, 
            language: "Espanhol", 
            pages: 624, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/what_is_ligma.png"),
        },
    ];

    // Salva os livros
    books.forEach((book, index) => {
        setItem(index, book);
    });
}



// Para carregamento da base de dados
export async function loadLocalStorage() {
    let books = [];
    for(let i = 0; i < 9; ++i) {
        getItem(i).then(res => {
            books.push(res);
        });
    }
    return books;
}

/*
export function loadLocalStorage() {
    let books = [];
    for(let i = 0; i < 9; ++i) {
        books.push(getItem(i));
    }
    return books;
}
*/