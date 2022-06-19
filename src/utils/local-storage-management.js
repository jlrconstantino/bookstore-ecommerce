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


// Inicialização do armazenamento local
export async function startLocalStorage() {

    // Livros
    let books = [
        {
            id: 1, 
            title: "Getting an Arduino LED to Blink", 
            price: 49.90, 
            rating: 4.5, 
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
            title: "Changing Stuff and Seeing What Happens", 
            price: 29.90, 
            rating: 4.8, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Brochura", 
            year: 2012, 
            language: "Português", 
            pages: 145, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/changing_stuff.jpg"),
        },
        {
            id: 3, 
            title: "Useless GIT Commit Messages", 
            price: 88.49, 
            rating: 3.8, 
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
            id: 4, 
            title: "Using Convoluted Coding Practices to Piece Together a Somehow Functional Product", 
            price: 240.29, 
            rating: 5.0, 
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
            id: 5, 
            title: "Hoping This Works", 
            price: 9.90, 
            rating: 1.0, 
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
            id: 6, 
            title: "Ignoring Deprecation Warnings", 
            price: 32.89, 
            rating: 0.2, 
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
            id: 7, 
            title: "Hoping for the Right Interview Questions", 
            price: 67.89, 
            rating: 2.9, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Agrafado", 
            year: 2022, 
            language: "Latim", 
            pages: 79, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/interview_questions.jpg"),
        },
        {
            id: 8, 
            title: "Googling for the Regex", 
            price: 129.90, 
            rating: 4.4, 
            author: "The Practical Developer",
            publisher: "O RLY?",
            finishing: "Cartunado", 
            year: 2014, 
            language: "Inglês", 
            pages: 690, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
            img_src: require("@/assets/sample-books/commit_messages.jpeg"),
        },
        {
            id: 9, 
            title: "Resolving Broken Dependencies", 
            price: 419.90, 
            rating: 2.4, 
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
            id: 10, 
            title: "Title Goes Here", 
            price: 14.90, 
            rating: 3.3, 
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
            id: 11, 
            title: "Trying Stuff Until it Works", 
            price: 16.90, 
            rating: 4.0, 
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
            id: 12, 
            title: "What is LIGMA", 
            price: 22.70, 
            rating: 3.0, 
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
        setItem("book#" + (index + 1), book);
    });
}



// Para carregamento da base de dados
export async function loadLocalStorage() {
    let books = [];
    for(let i = 1; i <= 12; i++) {
        getItem("book#" + i).then(res => {
            books.push(res);
        });
    }
    return books;
}