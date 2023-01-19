import { createSignal, JSX, Setter } from "solid-js";
import { Book } from "../../App.types";

type AddBookProps = {
  setBooks: Setter<Book[]>;
};

const emptyBook: Book = { title: "", author: "" };

export function AddBook(props: AddBookProps) {
  const [newBook, setNewBook] = createSignal(emptyBook);

  const addBook: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
    e.preventDefault();
    props.setBooks((books) => [...books, newBook()]);
    setNewBook(emptyBook);
  };

  return (
    <form>
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newBook().title}
          onInput={(e) => {
            setNewBook({ ...newBook(), title: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={newBook().author}
          onInput={(e) => {
            setNewBook({ ...newBook(), author: e.currentTarget.value });
          }}
        />
      </div>
      <button type="submit" onClick={addBook}>
        Add book
      </button>
    </form>
  );
}
