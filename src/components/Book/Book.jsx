import React from "react";
import { FaRegStar } from "react-icons/fa";
import Star from "../Icons/Star";

const Book = ({ book }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl flex flex-col gap-6">
      <div className="py-8 px-24 bg-[#F3F3F3] rounded-2xl">
        <img className="max-h-41.5 mx-auto" src={book.image} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <span className="bg-[#23BE0A]/5 py-1.75 px-4 rounded-2xl text-[#23BE0A]">{book.tags[0]}</span>
          <span className="bg-[#23BE0A]/5 py-1.75 px-4 rounded-2xl text-[#23BE0A]">{book.tags[1]}</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold font-playfair">{book.bookName}</h3>
          <span className="font-workSans">By: {book.author}</span>
        </div>
        <hr className="border-t border-dashed border-gray-300" />
        <div className="font-workSans flex justify-between">
          <span className="">{book.category}</span>
          <span className="flex gap-1 items-center">
            {book.rating} <Star></Star>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
