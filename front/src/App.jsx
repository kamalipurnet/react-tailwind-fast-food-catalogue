import { useEffect, useState } from "react";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import "./index.css";
import useAxios from "./useAxios";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function App() {
  const [url, setUrl] = useState("/products?populate=*");
  const [id, setId] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [themeButton, setThemeButton] = useState(<MdDarkMode />);
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("");

      setThemeButton(<MdDarkMode />);
    } else {
      setTheme("dark");
      setThemeButton(<MdLightMode />);
    }
  };
  const [fastFoodItems, , loading] = useAxios({
    url,
  });

  const filterItems = (categoryId) => {
    categoryId ? setId(categoryId) : setId(null);
  };
  // const searchItems = (term) => {
  //   setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  // };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    if (fastFoodItems.length === 0)
      return (
        <>
          <div className="text-center text-4xl font-bold fade-in-horiz">
            فست فود مورد نظر یافت نشد
          </div>
        </>
      );
    return <FastFoodList id={id} fastFoodItems={fastFoodItems} />;
  };

  return (
    <>
      <div className={`${theme} dark:bg-gray-900 bg-bg-1 min-h-screen`}>
        <div className="relative">
          {" "}
          <Header></Header>
        </div>
        <div className="absolute w-full">
          {" "}
          <CategoryList
            filterItems={filterItems}
            // search={searchItems}
            changeTheme={changeTheme}
            themeButton={themeButton}
          ></CategoryList>
        </div>
        <div className="continer mt-16 min-h-screen">{renderContent()}</div>
      </div>
    </>
  );
}

export default App;
