import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import { useState } from "react";

const CarouselProduct = ({ products }) => {
  let [current, setCurrent] = useState(0);

  let previousImage = () => {
    setCurrent(current === 0 ? products.length - 1 : current - 1);
  }

  let nextImage = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  }

  return (
    <div className="overflow-hidden relative h-full">
      <div className="relative w-full">
        <div
          className="flex h-[100%] transition easinout duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {
            products.map((p, i) => {
              return <img
              className="h-full w-full object-cover px-[16vw]"
              src={p} alt={`product-${i}`}/>
            })}
        </div>
        <div className="flex justify-between absolute top-1/2 left-0 w-full px-[10vw]">
          <button
            //#d9dde1 is the border color
            className="h-12 w-12 justify-center items-center flex bg-[#FFFFFF] hover:bg-[#e7f3f9] rounded border-2 border-[#d9dde1]"
            onClick={previousImage}>
            <IconContext.Provider value={{ color: "#026a9e", size: "1.5rem" }}>
              <IoIosArrowBack/>
            </IconContext.Provider>
          </button>
          <button 
            className="h-12 w-12 justify-center items-center flex bg-[#FFFFFF] hover:bg-[#e7f3f9] rounded border-2 border-[#d9dde1]"
            onClick={nextImage}>
            <IconContext.Provider value={{ color: "#026a9e", size: "1.5rem" }}>
              <IoIosArrowForward/>
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {
          products.map((p, i) => {
            return <div
              key={i}
              onClick={() => setCurrent(i)}>
            <img src={p} alt={`product-${i}`}
              className={`h-12 w-12 m-2 rounded-md cursor-pointer transition ease-in-out duration-700 ${current === i ? "border-2 border-[#026a9e]" : " border-2 border-[#d9dde1]"}`}
            />
            </div>

          })
        }
      </div>
    </div>
  );
}

export default CarouselProduct;
