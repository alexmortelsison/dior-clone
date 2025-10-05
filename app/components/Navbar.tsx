"use client";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const navIcons = [
  { icon: <BiSearch />, link: "" },
  { icon: <AiOutlineHeart />, link: "" },
  { icon: <BsPerson />, link: "" },
  { icon: <AiOutlineShopping />, link: "" },
];

export default function Navbar() {
  const menuRef = useRef(null);
  const iconsRef = useRef(null);
  const diorRef = useRef(null);

  useEffect(() => {
    gsap.to(menuRef.current, {
      opacity: 1,
      delay: 3,
    });
    gsap.to(iconsRef.current, {
      opacity: 1,
      delay: 3,
    });
    gsap.to(diorRef.current, {
      scale: 0.6,
      delay: 2,
    });
  });
  return (
    <nav className="w-screen flex justify-between items-center px-8">
      <div className="text-xl opacity-0" ref={menuRef}>
        <HiOutlineMenuAlt4 />
      </div>
      <div ref={diorRef}>
        <h1 className="scale-100">DIOR</h1>
      </div>
      <div className="flex text-2xl space-x-4 opacity-0" ref={iconsRef}></div>
    </nav>
  );
}
