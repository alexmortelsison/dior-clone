import { BiChevronRight } from "react-icons/bi";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[100vh] w-screen bg-white mt-8 overflow-hidden px-8">
      <div className="bg-gray-100 p-8 rounded-lg">
        <div className="flex justify-between border-b pb-12">
          <div className="flex items-center">
            <div>
              <h2>Boutique pick-up</h2>
              <p className="text-gray-400">
                Order online and collect your items at your nearest boutique
              </p>
            </div>
            <div className="pl-24 flex items-center">
              <BiChevronRight className="text-4xl text-gray-400" />
              <p className="text-2xl pl-8 text-gray-400">|</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h2>Boutique pick-up</h2>
              <p className="text-gray-400">
                Order online and collect your items at your nearest boutique
              </p>
            </div>
            <div className="pl-24 flex items-center">
              <BiChevronRight className="text-4xl text-gray-400" />
              <p className="text-2xl pl-8 text-gray-400">|</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h2>Boutique pick-up</h2>
              <p className="text-gray-400">
                Order online and collect your items at your nearest boutique
              </p>
            </div>
            <div className="pl-24 flex items-center">
              <BiChevronRight className="text-4xl text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
