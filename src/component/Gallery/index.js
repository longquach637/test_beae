import React from "react";
import Rectangle_21 from "../../images/Rectangle_21.png";
import Rectangle_23 from "../../images/Rectangle_23.png";
import Rectangle_24 from "../../images/Rectangle_24.png";
import Rectangle_25 from "../../images/Rectangle_25.png";
import Rectangle_26 from "../../images/Rectangle_26.png";
import Rectangle_27 from "../../images/Rectangle_27.png";
import Rectangle_28 from "../../images/Rectangle_28.png";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-155 mt-top ml-left mr-right mb-right">
      <p className="lg:text-xl xl:text-xl 2xl:text-xl md:font-bold lg:font-bold xl:font-bold 2xl:font-bold xl:leading-xl 2xl:leading-xl uppercase sm:text-ssm md:text-ssm xl:text-ssm 2xl:text-ssm">
        Packer pen Gallery
      </p>
      <div className="flex flex-row items-center justify-center gap-18 mt-40 ">
        <div className="flex flex-col w-1/4 gap-13">
          <img
            className="max-w-291 max-h-185"
            src={Rectangle_23}
            alt="No Image"
          />
          <img
            className="max-w-291.04 max-h-308.64"
            src={Rectangle_25}
            alt="No Image"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-2/4 gap-13">
          <img
            className="max-h-284 max-w-582"
            src={Rectangle_21}
            alt="No Image"
          />
          <img
            className="max-w-582 max-h-25"
            src={Rectangle_24}
            alt="No Image"
          />
        </div>
        <div className="flex  flex-col w-1/4 gap-13">
          <img
            className="max-w-291 max-h-119 object-fill"
            src={Rectangle_26}
            alt="No Image"
          />
          <img
            className="max-w-291 max-h-230"
            src={Rectangle_27}
            alt="No Image"
          />
          <img
            className="max-w-291.04 max-h-138.89"
            src={Rectangle_28}
            alt="No Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
