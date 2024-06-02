import { useEffect } from "react";
import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ id, fastFoodItems }) => {
  
  let delay = 0.1;
  return (
    <>
      <div className=" grid grid-cols-3 gap-4 px-64">
        {fastFoodItems.data.map((fastFood) => {
          if (id === null) {
            delay += 0.03;
            return (
              <div className="" key={fastFood.id}>
                <FastFoodItem {...fastFood.attributes} delay={delay} />
              </div>
            );
          } else {
            if (fastFood.attributes.categories.data[0].id === id) {
              delay += 0.03;
              return (
                <div className="" key={fastFood.id}>
                  <FastFoodItem {...fastFood.attributes} delay={delay} />
                </div>
              );
            }
          }
        })}
      </div>
    </>
  );
};
export default FastFoodList;
