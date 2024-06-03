import { HiShoppingCart } from "react-icons/hi";

import "animate.css";
const FastFoodItem = ({ name, price, discription, image, delay }) => {
  return (
    <>
      {/* <div
        className="h-96 border-0 shadow-xl flex  flex-col opacity-0 fade-in-horiz dark:text-white dark:bg-blue-950 "
        style={{ animationDelay: delay + "s" }}
      >
        <span className="absolute bg-green-300 shadow-md m-3 shadow-green-300">
          قیمت: {price.toLocaleString()} تومان
        </span>
        <img
          className=""
          src={"http://localhost:1337" + image?.data?.attributes?.url}
        />
        <div className=" text-center pt-3 flex-1 flex flex-col">
          <h5 className="mb-3 font-bold">{name}</h5>
          <div className="text-sm mb-3">{discription}</div>
          <span className=" w-100 flex justify-center items-end  mt-auto mb-5 ">
            <HiShoppingCart className="" />
            افزودن به سبد خرید
          </span>
        </div>
      </div>
 */}


      <div class="flex flex-col overflow-y-hidden h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class=" rounded-t-lg"
            src={"http://localhost:1337" + image?.data?.attributes?.url}
            alt=""
          />
        </a>
        <div class="h-full flex flex-col p-5">
          <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {name}{" "}
            </h5>
          </a>
          <p class=" mb-3 text-xs font-normal  text-gray-700 dark:text-gray-400">
            {discription}
          </p>
          <a
            href="#"
            class="mt-auto justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <HiShoppingCart className="ml-1" />
            افزودن به سبد خرید{" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default FastFoodItem;
