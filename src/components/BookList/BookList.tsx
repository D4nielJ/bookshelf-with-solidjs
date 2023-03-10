import { For } from "solid-js";
import { Book } from "../../App.types";

interface BookListProps {
  books: Book[];
}

export function BookList(props: BookListProps) {
  return (
    <>
      <h2>My books ({props.books.length})</h2>
      <ul>
        <For each={props.books}>
          {(book) => (
            <li>
              {book.title}
              <span style={{ "font-style": "italic" }}> ({book.author})</span>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
