export function LibraryServiceFactory() {

  function Library() {
    this.startDate = new Date();
    this.formatVersion = 'v1.0.0';
    this.books = [];
  }

  Library.prototype.admitBook = function(book) {
    this.books.push(book);
  };

  Library.prototype.deleteBook = function(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
    return index;
  };

  return Library;

}
