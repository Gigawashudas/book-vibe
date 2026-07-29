import bookimage from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto rounded-2xl h-138.5 items-center px-30 py-20 bg-[#131313]/5  mb-15">
      <div className="max-w-131.5">
        <h1 className="font-playfair text-[56px] font-bold">Books to freshen up your bookshelf</h1>
        <button className="btn btn-primary mt-12 border-0 bg-[#23BE0A]">View The List</button>
      </div>
      <div>
        <img className="w-79.5 h-98.5" src={bookimage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
