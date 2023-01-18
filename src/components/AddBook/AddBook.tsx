export function AddBook() {
  return (
    <form>
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" id="author" name="author" />
      </div>
      <button type="submit">Add book</button>
    </form>
  );
}
