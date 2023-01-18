import { createSignal, For } from "solid-js";

type Book = {
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

export function BookList() {
  const [books, setBooks] = createSignal(initialBooks);

  return (
    <ul>
      <For each={books()}>
        {(book) => (
          <li>
            {book.title} ({book.author})
          </li>
        )}
      </For>
    </ul>
  );
}
