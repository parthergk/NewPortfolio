"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className=" fixed top-0 left-0 w-full z-10 flex justify-between pt-6 px-8 ">
        <div className="text-md sm:text-3.2xl lg:text-3.8xl text-white font-light">
          BogiBogi
        </div>
        <Nav />
        <div onClick={() => (setIsActive(!isActive))} className="sm:hidden z-20">
          <div>{isActive ? 'close':'menu'}</div>
        </div>
      </header>
      <div></div>
    </>
  );
}
