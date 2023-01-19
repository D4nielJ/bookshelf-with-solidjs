import { createSignal } from "solid-js";
import { Book } from "./App.types";
import { AddBook } from "./components/AddBook/AddBook";
import { BookList } from "./components/BookList/BookList";

export interface BookshelfProps {
  name: string;
}

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function Bookshelf(props: BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks);

  return (
    <div>
      <h1>{props.name}'s bookshelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
}

function App() {
  return <Bookshelf name="Solid" />;
}

export default App;
