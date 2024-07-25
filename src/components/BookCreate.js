import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate () {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    // this event handler takes value in input and updates the state
    const handleChange = (event) => {
      setTitle(event.target.value);
    }

    // this event handler takes the title and runs onCreate once form is submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;