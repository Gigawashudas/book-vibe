import { useLoaderData } from "react-router";
import { getReadList, getWishList } from "../../utility/addToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../../components/ListedBook/ListedBook";

const BookLists = () => {
  const books = useLoaderData();

  const readListIds = getReadList();
  const readList = books.filter((book) => readListIds.includes(String(book.bookId)));

  const wishListIds = getWishList();
  const wishList = books.filter((book) => wishListIds.includes(String(book.bookId)));

  return (
    <div className="max-w-6xl mx-auto mb-10">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="rounded-2xl w-6xl  py-9 text-center text-3xl font-bold bg-[#131313]/5">Books</h1>
        <button className="btn w-20">Sort</button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col mt-5 gap-5">
            {readList.map((book) => (
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
