import { useState } from "react";
import "./Books.css"; // CSS file import

export default function Books() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [books, setBooks] = useState([
    { title: "rich dad , poor dad", author: "Robert T. Kiyosaki" }
  ]);

  const saveBook = () => {
    if (!title.trim() || !author.trim()) return;

    if (editIndex === null) {
      setBooks([...books, { title, author }]);
    } else {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = { title, author };
      setBooks(updatedBooks);
      setEditIndex(null);
    }

    setTitle("");
    setAuthor("");
  };

  const deleteBook = (i) => {
    setBooks(books.filter((_, idx) => idx !== i));
  };

  const editBook = (i) => {
    setTitle(books[i].title);
    setAuthor(books[i].author);
    setEditIndex(i);
  };

  return (
    <div className="container">
      <h2 className="title">📚 Books List</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Book Name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="save-btn" onClick={saveBook}>
          {editIndex === null ? "Add Book" : "Update Book"}
        </button>
      </div>

      <div className="list">
        {books.map((book, i) => (
          <div className="book-item" key={i}>
            <span>
              <strong>{book.title}</strong> - {book.author}
            </span>
            <div className="actions">
              <button className="edit-btn" onClick={() => editBook(i)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteBook(i)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
