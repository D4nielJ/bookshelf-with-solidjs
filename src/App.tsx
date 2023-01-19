import { createSignal, Show } from "solid-js";
import { Book } from "./App.types";
import { AddBook } from "./components/AddBook/AddBook";
import { BookList } from "./components/BookList/BookList";

export interface BookshelfProps {
  name: string;
}

const initialBooks: Book[] = [];

function Bookshelf(props: BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);
  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      <h1>{props.name}'s bookshelf</h1>

      <Show
        when={books().length > 0}
        fallback={
          <>
            <p>You have no books in your bookshelf.</p>
          </>
        }
      >
        <BookList books={books()} />
      </Show>

      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a book</button>}
      >
        <AddBook setBooks={setBooks} />
        <button onClick={toggleForm}>Finished adding books</button>
      </Show>
    </div>
  );
}

function App() {
  return <Bookshelf name="Solid" />;
}

export default App;
