import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
const Search = ({ search }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    search(value);
  }, [value]);
  return (
    <form>
      <div className="flex flex-row justify-center items-center  border border-1 border-black p-1">
        <label htmlFor="search text-black">
          <BsSearch className="text-black" />
        </label>
        <input
          className="mr-2 outline-none"
          id="search"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          placeholder="جست و جوی فست فود"
        ></input>
      </div>
    </form>
  );
};
export default Search;
