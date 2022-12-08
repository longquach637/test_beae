import React, { useState } from "react";
import Pencils from "../../../images/Vector.png";
import Marker from "../../../images/Marker.png";
import Drawing from "../../../images/drawing.png";
import Notebooks from "../../../images/Notebooks.png";
import Container from "../Container";
const Toppic = () => {
  const [active, setActive] = useState("pencils");
  const handClick = (value) => {
    setActive(value);
  };
  return (
    <>
      <div className="sm:flex sm:flex-row xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-4 ">
        <div
          className="rounded-t-25 bg-gray-900 h-200 max-w-300 cursor-pointer"
          onClick={() => handClick("pencils")}
        >
          <div className="rounded-10 mt-32 mr-31 mb-28 ml-34 h-140 bg-gray-100 flex justify-center items-center flex-col shadow-xl">
            <div className="rounded-full bg-gray-900 p-11 mb-4 ">
              <img src={Pencils} alt={"No image"} width={36} height={36} />
            </div>
            <p className="font-poppins not-italic font-bold text-sm leading-8 text-blacks">
              Pencils
            </p>
          </div>
        </div>
        <div
          className="bg-gray-100 h-200 max-w-300 cursor-pointer "
          onClick={() => handClick("markers")}
        >
          <div className="rounded-10 mt-32 mr-31 mb-28 ml-34 h-140 bg-gray-100 flex justify-center items-center flex-col shadow-xl">
            <div className="rounded-full bg-gray-900 p-11 mb-4">
              <img src={Marker} alt={"No image"} width={36} height={36} />
            </div>
            <p className="font-poppins not-italic font-bold text-sm leading-8 text-blacks">
              Markers
            </p>
          </div>
        </div>
        <div className="bg-gray-100 h-200 max-w-300 cursor-pointer">
          <div className="rounded-10 mt-32 mr-31 mb-28 ml-34 h-140 bg-gray-100 flex justify-center items-center flex-col shadow-xl">
            <div className="rounded-full bg-gray-900 p-11 mb-4">
              <img src={Drawing} alt={"No image"} width={36} height={36} />
            </div>
            <p className="font-poppins not-italic font-bold text-sm leading-8 text-blacks">
              Drawing Colors
            </p>
          </div>
        </div>
        <div className="rounded-25 bg-gray-100 h-200 max-w-300 cursor-pointer">
          <div className="rounded-10 mt-32 mr-31 mb-28 ml-34 h-140 bg-gray-100 flex justify-center items-center flex-col shadow-xl">
            <div className="rounded-full bg-gray-900 p-11 mb-4">
              <img src={Notebooks} alt={"No image"} width={36} height={36} />
            </div>
            <p className="font-poppins not-italic font-bold text-sm leading-8 text-blacks">
              Notebooks
            </p>
          </div>
        </div>
      </div>
      {active === "pencils" && <Container />}
    </>
  );
};

export default Toppic;
