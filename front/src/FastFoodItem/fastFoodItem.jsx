import { HiShoppingCart } from "react-icons/hi";

import "animate.css";
const FastFoodItem = ({ name, price, discription, image, delay }) => {
  return (
    <>
      <div
        className="h-96 border-0 shadow-xl flex  flex-col opacity-0 fade-in-horiz dark:text-white dark:bg-blue-950 "
        style={{ animationDelay: delay + "s" }}
      >
        <span className="absolute bg-green-300 shadow-md m-3 shadow-green-300">
          قیمت: {price.toLocaleString()} تومان
        </span>
        <img className="" src={"http://localhost:1337"+image?.data?.attributes?.url} />
        <div className="text-center pt-3 flex-1 flex flex-col">
          <h5 className="mb-3 font-bold">{name}</h5>
          <div className="text-sm mb-3">{discription}</div>
          <span className=" w-100 flex justify-center items-end  mt-auto mb-5 ">
            <HiShoppingCart className="" />
            افزودن به سبد خرید
          </span>
        </div>
      </div>
    </>
  );
};
export default FastFoodItem;
