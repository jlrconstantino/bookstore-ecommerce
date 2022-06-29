"use strict"

// Funções assíncronas para manipulação de armazenamento local
function later() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}
export async function get_item(key) {
    later(); 
    return JSON.parse(localStorage.getItem(key));
}
export async function set_item(key, value) {
    later(); 
    localStorage.setItem(key, JSON.stringify(value));
}
export async function delete_item(key) {
    later();
    localStorage.removeItem(key);
}


// Inicialização do armazenamento local
export async function start_local_storage() {

    // Livros
    const books = [
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
        set_item("book#" + (index + 1), book);
    });

    // Usuários
    const users = [
        {
            id: 0, 
            name: "Cliente", 
            email: "customer@email.com", 
            password: "123", 
            birth: "16/09/1995", 
            tel: "(11) 99998-2888", 
            role: "customer", 
        }, 
        {
            id: 1, 
            name: "Administrador", 
            email: "admin@email.com", 
            password: "123", 
            birth: "02/11/2007", 
            tel: "(99) 11111-2222", 
            role: "admin", 
        }, 
    ];

    // Salva os usuários
    users.forEach((user, index) => {
        set_item("user#" + index, user);
    });

    // Categorias
    const categories = [
        {id: 0, name: ""}, 
        {id: 1, name: "Infantil"}, 
        {id: 2, name: "Literatura Internacional"}, 
        {id: 3, name: "Literatura Brasileira"}, 
        {id: 4, name: "Ficção Científica"}, 
        {id: 5, name: "História"}, 
        {id: 6, name: "Biografia"}, 
        {id: 7, name: "Autoajuda"}, 
        {id: 8, name: "Psicologia"}, 
        {id: 9, name: "Terror"}, 
    ];

    // Salva as categorias
    categories.forEach((category, index) => {
        set_item("category#" + index, category);
    });

    // Relacionamento entre os livros e as categorias
    const has_category = [

        // Livro 1
        {book: 1, category: 2}, 
        {book: 1, category: 4}, 

        // Livro 2
        {book: 2, category: 6}, 

        // Livro 3
        {book: 3, category: 7}, 

        // Livro 4
        {book: 4, category: 5}, 

        // Livro 5
        {book: 5, category: 1}, 
        {book: 5, category: 3}, 

        // Livro 6
        {book: 6, category: 7}, 
        {book: 6, category: 2}, 

        // Livro 7
        {book: 7, category: 8}, 
        {book: 7, category: 2}, 

        // Livro 8
        {book: 8, category: 5}, 
        {book: 8, category: 3}, 

        // Livro 9
        {book: 9, category: 5}, 
        {book: 9, category: 9}, 

        // Livro 10
        {book: 10, category: 3}, 
        {book: 10, category: 9}, 

        // Livro 11
        {book: 11, category: 2}, 
        {book: 11, category: 4}, 
        {book: 11, category: 9}, 

        // Livro 12
        {book: 12, category: 9}, 
    ];

    // Salva as categorias dos livros
    has_category.forEach((element, index) => {
        set_item("has_category#" + index, element);
    });
}


// Para carregamento da base de dados
export async function load_local_storage_books() {
    let books = [];
    for(let i = 1;; i++) {
        let response = await get_item("book#" + i);
        if(response != null){
            books.push(response);
        }else{
            break;
        }
    }
    return books;
}


// Para carregamento dos usuários
export async function load_local_storage_users() {
    let users = [];
    for(let i = 0;; i++) {
        let response = await get_item("user#" + i);
        if(response != null){
            users.push(response);
        }else{
            break;
        }
    }
    return users;
}


// Para carregamento dos cartões de crédito
export async function load_local_storage_credit_cards() {
    let cards = [];
    for(let i = 0;; i++) {
        let response = await get_item("card#" + i);
        if(response != null){
            cards.push(response);
        }else{
            break;
        }
    }
    return cards;
}


// Para carregamento dos endereços de entrega
export async function load_local_storage_delivery_addresses() {
    let addresses = [];
    for(let i = 0;; i++) {
        let response = await get_item("address#" + i);
        if(response != null){
            addresses.push(response);
        }else{
            break;
        }
    }
    return addresses;
}


// Para carregamento das categorias
export async function load_local_storage_categories() {
    let categories = [];
    for(let i = 0;; i++) {
        let response = await get_item("category#" + i);
        if(response != null){
            categories.push(response);
        }else{
            break;
        }
    }
    return categories;
}


// Para carregamento das categorias pertencentes aos livros
export async function load_local_storage_has_category() {
    let has_category = [];
    for(let i = 0;; i++) {
        let response = await get_item("has_category#" + i);
        if(response != null){
            has_category.push(response);
        }else{
            break;
        }
    }
    return has_category;
}