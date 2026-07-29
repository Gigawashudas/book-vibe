import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router";

const BookList = ({ book }) => {
  return (
    <div className="flex gap-10 p-5 border border-gray-200 rounded-2xl">
      <div className="w-70 aspect-square bg-gray-300 flex justify-center items-center rounded-2xl">
        <img className="h-43 max-w-full object-contain" src={book.image} alt="" />
      </div>
      <div className="flex flex-col w-full justify-between">
        <h2 className="font-bold text-[24px] font-playfair">{book.bookName}</h2>
        <p className="font-workSans">By: {book.author}</p>
        <div className="flex items-center gap-3">
          <span className="font-bold">Tag</span>
          <span className="bg-[#23BE0A]/5 py-1.75 px-4 rounded-4xl text-[#23BE0A]">#{book.tags[0]}</span>
          <span className="bg-[#23BE0A]/5 py-1.75 px-4 rounded-4xl text-[#23BE0A]">#{book.tags[1]}</span>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-2xl" />
            <span>Year of Publishing:</span>
            <span>{book.yearOfPublishing}</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <GoPeople />
            <span>Publisher:</span>
            <span>{book.publisher}</span>
          </div>
          <div className="flex gap-2 items-center">
            <RiPagesLine />
            <span>Pages:</span>
            <span>{book.totalPages}</span>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-center gap-5">
          <span className="font-workSans bg-[#328EFF]/15 btn font-normal border-none rounded-4xl text-[#328EFF]">Category: {book.category}</span>
          <span className="bg-[#FFAC33]/15 btn border-none font-normal rounded-4xl text-[#FFAC33]">Rating: {book.rating}</span>
          <Link to={`/bookDetails/${book.bookId}`}>
            <button className="btn bg-[#23BE0A] rounded-4xl font-normal text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
