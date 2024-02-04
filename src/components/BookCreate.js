import { useState } from "react";

function BookCreate ({ onCreate }) {
    const [title, setTitle] = useState('');

    // this event handler takes value in input and updates the state
    const handleChange = (event) => {
      setTitle(event.target.value);
    }

    // this event handler takes the title and runs onCreate once form is submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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