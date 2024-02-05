import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App () {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('need to add book with title', title);
        const updatedBooks = [...books, 
            { id:Math.round(Math.random()*999), 
                title,
            },
        ];
        setBooks(updatedBooks);
    }
    console.log(books)

    return (
        <div className="app">
            <BookList books={books}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;