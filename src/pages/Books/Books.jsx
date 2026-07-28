import React, { Suspense, useEffect, useState } from "react";
import Book from "../../components/Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

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
      <Suspense fallback={<span>Loading........</span>}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-10 mb-32">
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
