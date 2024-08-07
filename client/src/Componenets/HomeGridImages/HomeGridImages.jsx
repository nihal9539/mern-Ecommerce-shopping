import React from "react";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img-4.jpg";
import img3 from "../../assets/image/img-9.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HomeGridImages = () => {
  return (
    <section className=" grid grid-cols-3 p-16 pt-0 px-28 gap-1 max-lg:px-2 ">
      <Link to={"/collection/all"} className="relative row-span-2  bg-red-400">
        <img src={img1} className=" h-full" alt="Image" />
        <button
          style={{ transform: "translate(-50%, 0)" }}
          className="  lg:btn lg:text-white  text-white max-lg:underline  max-md:text-xs rounded-none lg:px-7 absolute left-[50%] max-md:bottom-14  bottom-24  font-bold "
        >
          Shop Now
        </button>
      </Link>
      <Link to={"/collection/all"} className="col-span-2 row-span-1 relative">
        <img src={img2} className=" h-72 max-md:h-40 w-full" alt="Image" />
        <button className=" text-black flex items-center gap-1.5 [&>*]:hover:translate-x-1.5 [&>*]:duration-500 max-lg:text-xs absolute right-5 bottom-6   font-bold ">
          SHOP NEW ARRIVALS
          <FaArrowRight />
        </button>
      </Link>
      <Link to={"/collection/all"} className="col-span-2 row-span-1 relative">
        <img src={img3} className=" h-72 max-md:h-40  w-full" alt="Image" />
        <button className=" text-black flex items-center gap-1.5 [&>*]:hover:translate-x-1.5 [&>*]:duration-500 max-lg:text-xs absolute left-5  bottom-6   font-bold ">
          SHOP NEW ARRIVALS
          <FaArrowRight />
        </button>
      </Link>
    </section>
  );
};

export default HomeGridImages;
