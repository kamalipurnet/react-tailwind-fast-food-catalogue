import { useEffect, useState } from "react";
import Loading from "../Loading/loading";
import Search from "../Search/search";
import useAxios from "../useAxios";

const CategoryList = ({ filterItems, search, changeTheme, themeButton }) => {
  const [categories, , loading] = useAxios({
    url: "/categories",
  });

  const renderContent = () => {
    if (loading) {
      return <Loading theme={"primary"}></Loading>;
    } else {
      return (
        <ul className="py-1 sm:py-4 whitespace-nowrap flex flex-row w-full  items-center sm:justify-center">
           <li className="">
            <button
              onClick={changeTheme}
              className=" mr-3 border border-1 rounded-full border-black dark:border-white  p-1"
            >
              {themeButton}
            </button>
          </li>
          <div className="flex" >
            {" "}
            <li
              className="px-3"
              onClick={() => {
                filterItems();
              }}
            >
              <a className="hover:text-rose-500 focus:text-rose-500" href="#">
                همه فست فود ها
              </a>
            </li>
            {categories.data.map((category) => (
              <li
                className="px-3"
                key={category.id}
                onClick={() => {
                  filterItems(category.id);
                }}
              >
                <a className="hover:text-rose-500 focus:text-rose-500" href="#">
                  {category.attributes.name}
                </a>
              </li>
            ))}
          </div>
          {/* <li className="mr-auto ml-5 text-black dark:bg-white">
            <Search search={search} />
          </li> */}
         
        </ul>
      );
    }
  };

  return (
    <nav className="sm:grid sm:grid-cols-6 ">
      <div className="max-sm:overflow-x-scroll text-xs sm:col-start-2 sm:col-end-6 mb-12 -mt-7  bg-white rounded-xl shadow-lg dark:bg-primary-900 dark:text-white">
        {renderContent()}
      </div>
    </nav>
  );
};
export default CategoryList;
