import { Book } from "../App.types";

type ResultItem = {
  title: string;
  author_name: string[];
};

const searchBooks = async (query: string): Promise<Book[]> => {
  if (query.trim() === "") return [];

  const response = await fetch(`http://openlibrary.org/search.json?q=${query}`);
  const data = await response.json();
  const docs = data.docs as ResultItem[];

  return docs.slice(0, 10).map(({ title, author_name }) => ({
    title,
    author: author_name?.join(", ") || "Unknown",
  }));
};

export default searchBooks;
