import bg from "../assets/images/header-background.jpg";
import bg2 from "../assets/images/h2.jpg";

const Header = () => {
  return (
    <>
      <div className=" h-56">
        <img className="object-cover  min-w-full h-56 max-sm:hidden" src={bg} />
        <img className="object-cover  min-w-full h-56 sm:hidden" src={bg2} />
      </div>
      {/* <div className=" pl-8 pt-3 lg:pl-24 lg:pt-20  text-white font-bold lg:text-5xl uppercase ">
        fast food catalogue
      </div> */}
    </>
  );
};
export default Header;
