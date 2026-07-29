import Book from "../../components/Book/Book";
import { Suspense } from "react";
const Books = ({ data }) => {
  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-[40px] font-bold underline text-center">Books</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-10 mb-32">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
