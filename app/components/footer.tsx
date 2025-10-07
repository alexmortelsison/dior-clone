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
              <p className="text-gray-500">
                Order online and collect your items at your nearest boutique
              </p>
            </div>
            <div className="pl-24 flex items-center">
              <BiChevronRight className="text-4xl text-gray-400" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-16">
          <div className="col-span-1">
            <div>
              <h2 className="text-xl">Get the latest news from Dior</h2>
              <div className="flex pt-8 space-x-4">
                <div className="border w-[320px] px-4 py-2 border-gray-400 rounded-lg">
                  *Email
                </div>
                <button className="bg-gray-700 text-white px-6 rounded-lg">
                  register
                </button>
              </div>
            </div>
          </div>
          <div className="flex col-span-2 justify-between pl-64">
            <div className="space-y-2 w-[200px]">
              <p className="text-xl">Boutique Finder</p>
              <p className="pt-4 text-gray-500 text-sm">
                Fashion & Accessories
              </p>
              <p className=" text-gray-500 text-sm">Fragrance & Beauty</p>
            </div>
            <div className="space-y-2 w-[200px]">
              <p className="text-xl">Support</p>
              <p className="pt-4 text-gray-500 text-sm">Inquiries</p>
              <p className=" text-gray-500 text-sm">
                Online Boutique Exclusive Benefits
              </p>
              <p className=" text-gray-500 text-sm">
                Frequently asked questions
              </p>
            </div>
            <div className="space-y-2 w-[200px]">
              <p className="text-xl">About Use</p>
              <p className="pt-4 text-gray-500 text-sm">Sustainability</p>
              <p className=" text-gray-500 text-sm">Ethics and Compliance</p>
              <p className=" text-gray-500 text-sm">Career</p>
            </div>
            <div className="space-y-2 w-[200px]">
              <p className="text-xl">Terms Of Use</p>
              <p className="pt-4 text-gray-500 text-sm">Accessibility</p>
              <p className=" text-gray-500 text-sm">Terms of Use</p>
              <p className=" text-gray-500 text-sm">Privacy Policy</p>
              <p className=" text-gray-500 text-sm">Managing Cookies</p>
              <p className=" text-gray-500 text-sm">
                General Terms and Conditions of Sale
              </p>
              <p className=" text-gray-500 text-sm">Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
