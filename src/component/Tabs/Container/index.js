import React from "react";

import PenBlack from "../../../images/Pen_black.png";
import PenRed from "../../../images/Pen-red.png";
import Pencils from "../../../images/Pencils.png";
const Container = () => {
  return (
    <div className="bg-gray-900 rounded-b-25 flex flex-row pt-51 pl-50 pr-50 pb-40 gap-38">
      <div className="flex w-1/4 flex-col text-left">
        <p className="text-left font-normal text-sm leading-8">
          Graphite Artist Quality Fine Art Drawing and Sketching Pencils
          Replaceable Nib Pencils.
        </p>
        <ul className="list-disc flex flex-col items-start mt-marginTop ml-marginTop font-semibold text-m leading-10">
          <li>MECHANICAL PENCILS</li>
          <li>EXECUTIVE PENCILS</li>
          <li>ENGRAVABLE PENCILS</li>
        </ul>
        <div className="rounded-5 mt-35 bg-orange w-120 h-50 flex flex-row items-center justify-center">
          Shop all
        </div>
      </div>

      <div className="flex-1 w-3/4 flex-row w-full">
        <div className="bg-gray-100 h-80 rounded-18 flex flex-row items-center justify-center w-full border-solid border-spacing-px border-white border-2">
          <div className="w-1/3 text-orange font-bold text-l leading-l">
            25% off
          </div>
          <div className="w-2/3 bg-gray-900 h-full flex flex-row items-center justify-center rounded-r-18">
            Offer Applicable on All Our Pencils
          </div>
        </div>

        <div className="grid grid-cols-3 mt-5 gap-5">
          <div className="bg-gray-100 rounded-18 pt-2.5 pr-22 pl-22">
            <img className="w-180" src={PenBlack} alt="No Image" />
            <p className="text-ssm font-medium mt-3.5 text-black0">
              Aero Mechanical Pencil
            </p>
            <div className="flex flex-row items-center justify-center text-16 leading-6 font-semibold gap-11 mt-7">
              <p>$99.00</p>
              <p className="line-through text-gray-200">$125.00</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-18 pt-2.5 pr-22 pl-22">
            <img className="w-180" src={PenRed} alt="No Image" />
            <p className="text-ssm font-medium mt-3.5 text-black0">
              Aero Mechanical Pencil
            </p>
            <div className="flex flex-row items-center justify-center text-16 leading-6 font-semibold gap-11 mt-7">
              <p>$75.00</p>
              <p className="line-through text-gray-200">$99.00</p>
            </div>
          </div>
          <div className=" bg-gray-100 rounded-18 pt-2.5 pr-22 pl-22">
            <img className="w-180" src={Pencils} alt="No Image" />
            <p className="text-ssm font-medium mt-3.5 text-black0">
              Aero Mechanical Pencil
            </p>
            <div className="flex flex-row items-center justify-center text-16 leading-6 font-semibold gap-11 mt-7">
              <p>$45.00</p>
              <p className="line-through text-gray-200">$70.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
