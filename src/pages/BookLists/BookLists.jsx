import { useLoaderData } from "react-router";
import { getReadList, getWishList } from "../../utility/addToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../../components/ListedBook/ListedBook";
import { useState } from "react";

const BookLists = () => {
  const books = useLoaderData();
  const [sortType, setSortType] = useState(null);

  // derive read list from books and stored ids
  const readList = books.filter((book) => getReadList().map(Number).includes(book.bookId));
  const wishListIds = getWishList();
  const wishList = books.filter((book) => wishListIds.includes(String(book.bookId)));

  const handleSort = (type) => {
    setSortType(type);
  };

  const sortedReadList = (() => {
    const list = [...readList];
    if (sortType === "pages") return list.sort((a, b) => b.totalPages - a.totalPages);
    if (sortType === "ratings") return list.sort((a, b) => b.rating - a.rating);
    return list;
  })();

  return (
    <div className="max-w-6xl mx-auto mb-10">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="rounded-2xl w-6xl  py-9 text-center text-3xl font-bold bg-[#131313]/5">Books</h1>
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] text-white font-normal">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col mt-5 gap-5">
            {sortedReadList.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col mt-5 gap-5">
            {wishList.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookLists;
