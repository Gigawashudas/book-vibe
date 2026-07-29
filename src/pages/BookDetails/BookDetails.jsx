import { useLoaderData, useParams } from "react-router";
import { addToReadList, addToWishList } from "../../utility/addToDB";

const BookDetails = () => {
  const books = useLoaderData();
  //   console.log(books);
  const { id } = useParams();
  const book = books.find((book) => book.bookId === Number(id));

  const handleMarkAsRead = (id) => {
    addToReadList(id);
  };

  const handleAddToWishList = (id) => {
    addToWishList(id);
  };
  return (
    <div className="px-33.75 flex gap-12 mx-auto mb-12">
      <div className="w-1/2 flex justify-center items-center rounded bg-gray-200">
        <img className="p-18" src={book.image} alt="" />
      </div>
      <div className="w-1/2 flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-playfair text-[40px] font-bold">{book.bookName}</h1>
          <p className="font-workSans font-medium">By {book.author}</p>
        </div>
        <hr className="border border-gray-300" />
        <div>
          <p className="font-workSans font-medium">{book.category}</p>
        </div>
        <hr className="border border-gray-300" />
        <div>
          <p>
            <span className="font-bold">Review:</span> {book.review}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold">Tag</span>
          <span className="bg-[#23BE0A]/5 py-1.75 px-4 rounded-4xl text-[#23BE0A]">#{book.tags[0]}</span>
          <span className="bg-[#23BE0A]/5 py-1.75 px-4 rounded-4xl text-[#23BE0A]">#{book.tags[1]}</span>
        </div>
        <hr className="border border-gray-300" />
        <div className="flex gap-15">
          <div className="flex flex-col">
            <span>Number Of Pages:</span>
            <span>Publisher:</span>
            <span>Year of Publishing:</span>
            <span>Rating:</span>
          </div>
          <div className="flex flex-col font-bold">
            <span>{book.totalPages}</span>
            <span>{book.publisher}</span>
            <span>{book.yearOfPublishing}</span>
            <span>{book.rating}</span>
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <button onClick={() => handleMarkAsRead(id)} className="btn">
            Mark as Read
          </button>
          <button onClick={() => handleAddToWishList(id)} className="btn bg-[#50B1C9]">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
