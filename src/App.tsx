import { AddBook } from "./components/AddBook/AddBook";
import { BookList } from "./components/BookList/BookList";

interface BookshelfProps {
  name: string;
}

function Bookshelf(props: BookshelfProps) {
  return (
    <div>
      <h1>{props.name}'s bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

function App() {
  return <Bookshelf name="Solid" />;
}

export default App;
