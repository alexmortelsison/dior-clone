"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function HomePage() {
  const bgRef = useRef(null);

  return (
    <div className="h-[100vh] w-screen">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-6xl font-nicolas scale-100">DIOR</h1>
      </div>
    </div>
  );
}
